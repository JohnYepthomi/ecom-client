import React from 'react'
import styled from 'styled-components';
import { ProductConsumer } from "../contexts/TempProvider";
import { useCart } from "../contexts/CartContext";
import { useHistory } from "react-router-dom";

const CheckoutDiv = styled.div`
    background-color: #e8e1e1;
    min-height: 100vh;
    height: 100%;
    padding: 10px;
    font-size: 0.8rem;
    

    .ck-items-container img{
        width: 50px;
        height: 50px;
        object-fit: contain;
    }

    .ck-items-container{
        display: flex;
        padding: 5px;
        
    }

    .ck-items-main-container{
        background-color: white;
        border-radius: 3px;
    }

    .ck-page-indicator{
        margin-bottom: 5px;
        padding-bottom: 10px;
        border-bottom: 1px solid lightgray;
        background-color: white;
        border-radius: 3px;
        padding: 10px;
        text-align: center;
    }
    
    
    .ck-page-indicator p{
        font-weight: bold;
        font-size: 1rem;
    }

    .ck-info-container{
        padding: 10px;
        font-size: 0.7rem;
    }

    .ck-price, .ck-name{
        font-weight: bold;
    }

    .ck-btn-container{
        margin-left: auto;
    }

    .order-calc-container{
        background-color: white;
        border-radius: 3px;
        padding: 10px;
    }

    .order-calc{
        display: flex;
        justify-content: space-around;
    }

    .order-btn{
        margin-top: 10px;
        width: 100%;
        margin: left: auto;
        margin-right: auto;
    }

    .your-items{
        padding: 10px;
        background-color: white;
        margin-top: 5px;
        margin-bottom: 1px;
    }

    button{
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
`
export default function Checkout({location}) {
    const { checkCartItems } = useCart();
    const { cartItems } = useCart();
    const history = useHistory();

    function handleCartItemClick(e){
        let id = e.target.id;
        history.push('/details', {itemId: id});
    }

    return (
        <CheckoutDiv>
        <div className="ck-page-indicator">
            <p> Checkout </p>
        </div>
        <div className="order-calc-container">
            <div className="order-calc">
                    <div>
                        <p>Subtotal</p>
                        <p>Tax</p>
                        <h4>Total</h4>
                    </div>
                    <div>
                        <p>45.00</p>
                        <p>3.59</p>
                        <h4>40.41</h4>
                    </div>
            </div>
            <button className="order-btn"> Place Order ({cartItems.length} {(cartItems.length > 1) ? "items" : "item" })</button>
        </div>
            
        
        <h4 className="your-items"> Your items</h4>
        <div className="ck-items-main-container">
                <ProductConsumer>
                    {
                        value => {
                            return value.products.map( item => 
                            {   
                                if(checkCartItems(item.id)){
                                    return(
                                        <div id={item.id} onClick={(e)=>{handleCartItemClick(e);}} className="ck-items-container">
                                                <img id={item.id} src={item.src} alt="Product Image"></img>
                                                <div id={item.id} className="ck-info-container">
                                                    <p id={item.id} className="ck-name">  {item.name} </p>
                                                    <p id={item.id} className="ck-price"> {item.price} </p>

                                                    <p id={item.id}> size </p>
                                                    <p id={item.id}> Color </p>
                                                </div>
                                                <div id={item.id} className="ck-btn-container">
                                                    <p id={item.id}> Add </p>
                                                    <p id={item.id}> Remove </p>
                                                </div>
                                        </div>
                                    );
                                }
                            });
                        }
                    }
                </ProductConsumer>
        </div>

        </CheckoutDiv>
    );
}
