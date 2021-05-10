import React from 'react'
import styled from 'styled-components';
import { ProductConsumer } from "../contexts/TempProvider";
import { useHistory } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import toast from 'react-simple-toasts'


const SideNav = styled.div`

    --fontNormal: 0.75rem;
    --fontMedium: 0.8rem;
    --fontLarge : 1.1rem;

    background-color: white;
    padding-top: 30px;
    color: black;
    height: 100%;
    padding: 5px;

    .d-main-container{
        display: flex;
        flex-direction : column;
        align-items: center;
        justify-content: space-around;
    }

    .d-img img{
        height: 100%;
        width : 100%;
        object-fit: contain;
    }

    .d-name{
        font-Size: var(--fontMedium);
        font-weight: bold;
        color: #4a4747;
        padding: 10px;
    }

    .d-info{
        width: 100%;
    }

    .d-btn-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60px;
        margin: 10px 0;
    }


    .d-btn-container button{
        border: none;
        margin: 0;
        text-decoration: none;
        background: #d8da3f;
        color: black;
        font-family: sans-serif;
        font-size: var(--fontMedium);
        border-radius: 4px;
        height: 27px;
        cursor: pointer;
        text-align: center;
        transition: background 250ms ease-in-out, transform 150ms ease;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    button:disabled {
        background: #dddddd;
      }

    .d-info-container{
        border: 1px solid lightgray;
        border-radius: 3px;
        margin: 5px 0;
        padding: 5px;
    }

    .d-price-container{
        margin: 5px 0;
        display: flex;
        justify-content: space-around;
        font-size: var(--fontLarge);
    }

    .d-price{
        font-weight: bold;
        color: green;
    }

    .d-price, .d-prevprice{
        display: flex;
    }

    /* RUPEE SYMBOLS  */
    .d-price p, .d-prevprice p{
        color: gray;
        font-weight: normal;
        font-size: 0.8rem;
    }

    .d-prevprice{
        font-style: italic;
    }

    .d-prevprice > div{
        text-decoration: line-through;
        color: gray;
    }

    .d-rating-container{
        display : flex;
        justify-content: space-around;
        align-items: center;
        font-size: var(--fontNormal);
    }

    .d-desc{
        border: 1px solid lightgray;
        border-radius: 3px;
        font-size: var(--fontMedium);
        font-style: italic;
        padding: 10px;
        margin-bottom: 100px;
    }

    .d-desc p{
        font-style: normal;
        font-weight: bold;
        font-size: 0.75rem;
    }
`

export default function Details({location}) {
    const history = useHistory();
    const { AddToCart, checkCartItems} = useCart();
    
    
    const handleBuyClick = ()=>{
        /*If the item is in the cart, go directly to the checkout page
         else add it to the cart and then go to the check out page*/
        if(checkCartItems(location.state.itemId)){
            history.push('/address');
        }else{
            
            AddToCart({id: location.state.itemId, qty: 1});
            history.push('/address');
        }
        
    }

    const handleCartClick = ()=>{
            AddToCart({id: location.state.itemId, qty: 1});
            toast('Added to Cart');
    }

    return (
        <SideNav >
                <ProductConsumer>
                    {
                        value=>{ 
                            return value.products.map(item => {
                                if(item.id === location.state.itemId){
                                    var style = { "--rating": item.rating };
                                    return(
                                            <div key={item.id} >
                                                <div className="d-main-container">
                                                    <div className="d-img">
                                                        <img alt="product"  src={item.src} />
                                                    </div>
                                                    <div  className="d-info">
                                                        <p  className="d-name">{item.name}</p>
                                                        <div className="d-btn-container">
                                                            <button type="button" onClick={()=>handleBuyClick()}>Buy Now</button>
                                                            <button type="button" disabled= {checkCartItems(location.state.itemId)} onClick={()=>{handleCartClick()}}>Add to Cart</button>
                                                        </div>
                                                        <div  className="d-info-container">
                                                                <div  className="d-price-container">
                                                                    <p  className="d-price"> <p>₹</p> {item.price}</p>
                                                                    <p  className="d-prevprice"><p>₹</p> <div>{item.prev_price}</div></p>
                                                                    <p  className="d-discount">{item.discount}Off</p>
                                                                </div>
                                                                <div  className="d-rating-container">
                                                                    <p  className="d-rating stars" style={style} aria-label="Rating of this product is out of 5.">
                                                                    </p>
                                                                    <p  className="d-total-ratings">55,623 ratings</p>
                                                                    <p  className="d-total-reviews">2,635 reviews</p>
                                                                </div>
                                                        </div>
                                                        <div className="d-variant-container">
                                                        </div>
                                                        <div className="d-desc">
                                                            <div > {item.description} </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    );
                                }
                            })
                        }
                    }
                </ProductConsumer>
        </SideNav>
    );
}
