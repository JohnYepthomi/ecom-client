import React,  { useState } from 'react';
import { useHistory } from "react-router-dom";
import CartLogo from '../Resources/cartlogo.svg';
import PersonIcon from '../Resources/person-fill.svg';
import { useAuth } from "../contexts/AuthContext";
import styled from 'styled-components';
import { useCart } from "../contexts/CartContext";

const MainHeader = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:  #080A00;
    height: 35px;
    

    .menu-btn{
      color: white;
      font-size: 1.7rem;
      cursor: pointer;
    }

    .brand-logo{
      color: white;
      font-weight: bold;
      cursor: pointer;

    }
    .menu-group{
      display: flex;
      width: 60px;
      justify-content: space-between;
    }

    .profile-btn{
      cursor: pointer;
      padding: 5px;
    }

    .cart-btn{
      cursor: pointer;
      padding: 5px;
      color: white;
    }

    .user-name{
      font-size: 0.5rem;
      font-weight: bold;
      color: white;
      margin-left: 50px;
    }
  
`

const SearchForm = styled.form`

padding: 5px;
background-color: #080A00;

/* Style the search field */
input[type=text] {
  padding: 10px;
  font-size: 0.8rem;
  border: 1px solid grey;
  float: left;
  width: 90%;
  background: #f1f1f1;
  color: gray;
  border-radius: 5px 0px 0px 5px;
}

/* Style the submit button */
button {
  float: left;
  width: 10%;
  padding: 10px;
  background: #D2AC1A;
  color: white;
  font-size: 0.8rem;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
  border-radius: 0px 5px 5px 0px;
}

button:hover {
  background: white;
  color: gray;
}

/* Clear floats */
::after {
  content: "";
  clear: both;
  display: table;
}
`

const FixedHeader = styled.div`
  position : sticky;
  top : 0;
`

function Header() {

  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const { cartItems } = useCart();
  let no_of_cart_items = cartItems.length;
  
  const handleClick = () => {
     history.push("/cart");
  }
    
    async function handleLogout() {
        setError("");

        try{
          await logout();
          history.push("/login");
        }catch{
          setError("Failed to Log out.")
        }
    }

    const goHome = () =>{
      history.push('/')
    }

    return (
              <>
                <FixedHeader >
                    <MainHeader > 
                      <div className="menu-btn">
                        ≡
                      </div>

                      <div className="brand-logo">
                        <p onClick={()=>{ goHome() }}>AHIBO</p>
                      </div>

                      
                      <button onClick={()=>{handleLogout()}}> Logout </button>

                      <div className="menu-group">
                          <div className="profile-btn">
                            <img src={PersonIcon} />
                          </div>

                          <div className="cart-btn" onClick={  ()=> {handleClick();} }>
                            <p>{no_of_cart_items}</p>
                            <img src={CartLogo} />
                          </div>
                      </div>

                    </MainHeader>

                    <SearchForm class="example" action="action_page.php">
                      <input type="text" placeholder="Search.." name="search"/>
                      <button type="submit"><i class="fa fa-search"></i></button>
                    </SearchForm>
                </FixedHeader>
              </>
            );
  }
  
  export default Header;
