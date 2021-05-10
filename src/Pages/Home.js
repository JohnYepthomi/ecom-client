import {ShopComp, Section} from '../Components/style'
import { ProductConsumer } from "../contexts/TempProvider";
import { useHistory } from "react-router-dom";
import React from 'react';

export default function Home() {

  const history = useHistory();

  const handleClick = (e)=>{
    let id = e.target.id;
    history.push('/details', {itemId: id});
  }

  return (<>
    <div>
      <ShopComp> BEST DEALS </ShopComp>
      <Section>
        <ProductConsumer>
          { 
            value => {
              return value.products.map(item => {
                    var style = { "--rating": item.rating };
                    return(
                        <div key={item.id} onClick={(e) => {handleClick(e)}}  className="product-card">
                          <div  id={item.id} className="card-wrapper">
                            <div id={item.id}   className="image-wrapper">
                              <div id={item.id}  className="product-image">
                                <img  id={item.id} alt="product"  src={item.src}/>
                              </div>
                            </div>
                            <div  id={item.id} className="product-info">
                              <p  id={item.id} className="product-name">{item.name}</p>
                              <div  id={item.id} className="infoflex-wrapper">
                                <div  id={item.id} className="info-wrapper">
                                  <div  id={item.id} className="price-wrapper">
                                    <p  id={item.id} className="product-price">₹ {item.price}</p>
                                    <p  id={item.id} className="product-prevprice">₹ {item.prev_price}</p>
                                    <p  id={item.id} className="product-discount">{item.discount}Off</p>
                                  </div>
                                  <div  id={item.id} className="productrating-wrapper">
                                    <p  id={item.id} className="product-rating stars" style={style} aria-label="Rating of this product is out of 5.">{item.rating}
                                    </p>
                                    <p  id={item.id} className="total-ratings">55,623 ratings</p>
                                    <p  id={item.id} className="total-reviews">2,635 reviews</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    );
              });
            }
          }
        </ProductConsumer>
      </Section>
    </div>
    </>);
}