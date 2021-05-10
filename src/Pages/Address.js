import React , { useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const AddressDiv = styled.div`
    min-height: 100vh;
    height: 100%;
    background-color: #eae8e8;
    h3{
        padding: 10px;
    }

    .a-container{
        display: flex;
        align-items: center;
        background-color: white;
        padding: 10px;
        box-shadow: 2px 2px 5px #ccc;
        -moz-box-shadow: 2px 2px 5px #ccc;
        -webkit-box-shadow: 2px 2px 5px #ccc;
        -khtml-box-shadow: 2px 2px 5px #ccc;
    }

    .a-container input{
        margin: 30px;
        width: 20px;
        height: 20px;
        color: green;
    }

    .main-container{
        display: flex;
        flex-direction : column;
        margin: 10px;
    }

    .new-address{
        background-color: white;
        padding: 10px;
        border-top: 1px solid lightgray;
    }
`

export default function Address() {

    const history = useHistory();
    const inputRef = useRef();

    function selectAddress (){
        history.push("/checkout");
        
    }

    function containerClick (){
        inputRef.current.checked = true;
    }
    
    return (
        <AddressDiv>
            <h3>Select a delivery address</h3>
            <div onClick={()=>{containerClick()}} className="main-container">
                <div className="a-container">
                    <input ref={inputRef} type="radio"></input>
                    <div>
                        <h4>John Yepthomi</h4>
                        <p>J-186, Sector 22</p>
                        <p>Noida,</p>
                        <p>UTTAR PRADESH</p>
                        <p>India</p>
                    </div>
                    <button onClick={()=>{selectAddress();}}> Select this Address</button>
                    <button> Edit Address</button>
                    <button> Add delivery Instructions </button>
                </div>

                <div className="new-address">
                    <h5> Add a new address </h5>
                </div>
                
               
            </div>
        </AddressDiv>
    )
}
