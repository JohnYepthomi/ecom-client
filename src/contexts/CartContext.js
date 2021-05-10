import React, { useContext, useState, useEffect } from 'react';
//import {projectFirestore} from '../Config/Firebase';

const CartContext = React.createContext()

export function useCart(){
    return useContext(CartContext);
}

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);


    /*The 'cartItemObj' consists of the productId and the quantity, quantity is 
    always 1 when first added, which can be increased/removed from the cart page*/
    function AddToCart(cartItemObj) {
        setCartItems(oldArr=> [...oldArr, cartItemObj]);
    }

    /*check if the cartItem is already in the cart */
    function checkCartItems(itemId){
        var found = false;
        for(var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === itemId) {
                found = true;
                break;
            }
        }
        return found;
    }

    function removeCartItem(itemId){

    }

    useEffect(() => {
        // let cartRef = projectFirestore.collection("customer_public_profile").doc('');
        // cartRef.get().then((doc)=>{
        //     if(doc.exists){
        //         console.log("Doc Data:" + doc.data());
        //         console.log("Doc Data:" + doc.data().cart[0].product_id);
        //         AddToCart(doc.data().cart[0].product_id);
        //     }else{
        //         console.log("CARTCONTEXT: No such data");
        //     }
        // }).catch((error)=>{
        //     console.log("CARTCONTEXT: Error getting Document ")
        // });
    }, [])

    const value = {
        cartItems,
        AddToCart,
        setCartItems,
        checkCartItems
    }

    return (
        <CartContext.Provider value= {value}>
            {children}
        </CartContext.Provider>
    )
}
