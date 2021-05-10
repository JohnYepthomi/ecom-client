import React, { Component } from "react";
import { detailProduct } from "../fallbackdata/data";
import {projectFirestore} from '../Config/Firebase'

const ProductContext = React.createContext();

class ProductProvider extends Component {
  
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  //intitiate the data fetching process after component has been mounted
  componentDidMount() {
    //this.fetchProducts("all");
  }

  //fetch data from firebase. Can pass 'all' as a parameter to get data randomly across all categories
  fetchProducts = async ( category )=>{
    let productsRef = projectFirestore.collection("products");
    let query = productsRef;

    if(category !== "all"){
      query = productsRef.where('category_id', '==', category);
      query.get().then((querySnapshot) => {
        let products = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            products.push({
              name  : doc.data().name,
              price : doc.data().price,
              prev_price : doc.data().prev_price,
              discount : doc.data().product_discount,
              id    : doc.id, 
              src   : doc.data().pictures[0].src,
              rating: doc.data().rating,
              category_id : doc.data().category_id
            });
        });
  
        this.setState(() => {
          return { products };
        }, this.checkCartItems);
      })
    }else{
      query.get().then((querySnapshot) => {
        let products = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            products.push({
              name  : doc.data().name,
              price : doc.data().price,
              prev_price : doc.data().prev_price,
              discount : doc.data().product_discount,
              id    : doc.id, 
              src   : doc.data().pictures[0].src,
              rating: doc.data().rating
            });
        });
  
        this.setState(() => {
          return { products };
        }, this.checkCartItems);
      })
    }


  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let productsProducts = [...this.state.products];
    const index = productsProducts.indexOf(this.getItem(id));
    const product = productsProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
        return {
            products: [...productsProducts],
            cart: [...this.state.cart, product],
            detailProduct: { ...product }
        };
    }, this.addTotals);
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    let productsCart = [...this.state.cart];
    const selectedProduct = productsCart.find(item => {
      return item.id === id;
    });
    const index = productsCart.indexOf(selectedProduct);
    const product = productsCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    this.setState(() => {
      return {
        cart: [...productsCart]
      };
    }, this.addTotals);
  };

  decrement = id => {
    let productsCart = [...this.state.cart];
    const selectedProduct = productsCart.find(item => {
      return item.id === id;
    });
    const index = productsCart.indexOf(selectedProduct);
    const product = productsCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(() => {
        return { cart: [...productsCart] };
      }, this.addTotals);
    }
  };

  getTotals = () => {
    // const subTotal = this.state.cart
    //   .map(item => item.total)
    //   .reduce((acc, curr) => {
    //     acc = acc + curr;
    //     return acc;
    //   }, 0);
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const productsTax = subTotal * 0.1;
    const tax = parseFloat(productsTax.toFixed(2));
    const total = subTotal + tax;
    return {
      subTotal,
      tax,
      total
    };
  };

  addTotals = () => {
    const totals = this.getTotals();
    this.setState(
      () => {
        return {
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  };

  removeItem = id => {
    let productsProducts = [...this.state.products];
    let productsCart = [...this.state.cart];

    const index = productsProducts.indexOf(this.getItem(id));
    let removedProduct = productsProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    productsCart = productsCart.filter(item => {
      return item.id !== id;
    });

    this.setState(() => {
      return {
        cart: [...productsCart],
        products: [...productsProducts]
      };
    }, this.addTotals);
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          fetchProducts: this.fetchProducts
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );  
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };