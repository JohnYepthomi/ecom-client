import React from 'react'
import styled from 'styled-components';
import { ProductConsumer } from "../contexts/TempProvider";
import { useCart } from "../contexts/CartContext";
import { useHistory } from "react-router-dom";

const CheckoutDiv = styled.div`
    background-color: white;
    min-height: 100vh;
    height: 100%;
    padding: 10px;
    

    .c-items-container img{
        width: 100px;
        height: 100px;
        object-fit: contain;
    }

    .c-items-container{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        padding: 5px;
    }
    
    .c-page-indicator p{
        font-weight: bold;
        font-size: 1.3rem;

    }

    .c-info-container{
        padding: 10px;
        font-size: 0.7rem;
    }

    .c-price, .c-name{
        font-weight: bold;
    }
`

function Cart(props) {

    const { cartItems, checkCartItems } = useCart();
    const history = useHistory();

    function handleCheckout(){
        history.push('/address')
    }

    return (
        <CheckoutDiv>
            <h4> Cart</h4>
            <button onClick={()=>{handleCheckout();}}> Proceed to Checkout </button>
            <ProductConsumer>
                {
                    value => {
                        return value.products.map( item => 
                        {   
                            if(checkCartItems(item.id)){
                                return(
                                    <div className="c-items-container">
                                            <img src={item.src} alt="Product Image"></img>
                                            <div className="c-info-container">
                                                <p className="c-name">  {item.name} </p>
                                                <p className="c-price"> {item.price} </p>

                                                <p> size </p>
                                                <p> Color </p>
                                            </div>
                                            <div className="c-btn-container">
                                                <button> Add </button>
                                                <button> Remove </button>
                                            </div>
                                    </div>
                                );
                            }
                        });
                    }
                }
            </ProductConsumer>
        
        </CheckoutDiv>
    );
}

export default  Cart;