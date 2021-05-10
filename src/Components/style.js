import styled from 'styled-components';

export const Search = styled.input`
    position:relative;
    height:30px;
    width:445px;
    padding: 0px 10px 0px 10px;
    transition: all 1000ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
    background: #FFFFFF;
    color: black;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: -75px;
    cursor: pointer;
    border-radius: 5px;
    z-index: 1;
    border: 1px solid #71a663;
    font-family: 'Sarpanch', sans-serif;
     -webkit-mask-image: -webkit-radial-gradient(white, black);
    &:focus{
        width: 400px;
        outline: none;
        transform: skew(-5deg);
        background: #ffffff;
        margin-right: 0px;
        border-radius: 0px;
        border: 1px solid white;
        cursor: text;
        font-family: 'Sarpanch';
        transition: all 1000ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
    }
    &:focus::placeholder {
        color: transparent;
        transition: all 300ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
        padding: 0px;
    }
    &::placeholder {
        color: gray;
        padding: 90px;
        transition: all 300ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
        font-family: 'Sarpanch', sans-serif;
    }
`

export const Input = styled.input.attrs({ 
    type: 'submit',
    value: 'GO'
  })`
    height: 30px;
    border: 0px solid;
    width: 50px;
    background: #71a663;
    position: relative;
    transform: skew(-5deg);
    color: white;
    cursor: pointer;
    border-top: 1px solid white;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    z-index: 0;
    transition: all 300ms linear;
    font-weight: 700;
    font-family: 'Sarpanch', sans-serif;
    :hover {
        background: white;
        transition: all 300ms linear;
        color: rgb(30,30,30);
      }
`
export const ShopComp = styled.div`
    color: gray  ;
    background-color: white;
    height: 22px;
    margin-bottom: 0px;
    padding-left: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 18px;
    font-weight: bold;
    &:hover{
        
    }
`
export const TopHeader = styled.header`
    height: 140px;
    width: auto;
    background-color: #71a663;
    color: white;
`

export const Flexified = styled.div`
    display:flex;
`

export const BrandLogo  = styled.img`
    width: 30px;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;

`

export const TopMenu = styled.div`
    display: flex;
    align-items: flex-end;
    background-color: #71a663;
    color: white;
    padding: 5px;
    font-size: 14px;
`

export const TopMenuGaps = styled.div`
    margin-left: 25px;
    font-weight: bold;
`
export const Section = styled.div`

    /*----- FONT SIZES-----*/
    --prodnameFS: 0.8rem;
    --prodnameFSM: 0.8rem;
    --prodpriceFS: 0.8rem;
    --prodpriceFSM: 0.9rem;
    --prodprevpriceFS : 0.8rem;
    --prodprevpriceFSM : 2rem;
    --proddiscountFSM: 0.8rem;
    --categoryFS: 0.8rem;
    --brandnameFS: 1.8rem;
  
    /* ----stars---- */
    --star-size: 12px;
    --star-color: #fff;
    --star-background: #ffb300;

    /********************/

    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

  .product-card {
    flex: 1 0 0;
    padding: 0% !important;
  }
  
  
  .card-wrapper {
    padding: 5px !important;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0px 0px 0px 0px lightgray;
  }
  
  .product-image img {
    width: 100%;
    height: 180px;
    object-fit: contain;
    margin: 0px !important;
    padding: 0 !important;
  }
  
  .image-wrapper {
    padding-left: 15% !important;
    padding-right: 15% !important;
  }
  
  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start !important;
    margin-top: auto;
    /*padding-top: 10px !important;*/
  }
  
  .productrating-wrapper {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
  }
  
  .total-ratings {
    margin-left: 10px !important;
    font-size: 0.5rem;
    color: gray;
  }
  
  .total-reviews {
    margin-left: 10px !important;
    font-size: 0.5em;
    color: gray;
  }
  
  .product-name {
    width: 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--prodnameFS);
    text-align: left;
  }
  
  .product-rating {
    width: fit-content;
    padding: 3px !important;
    border-radius: 5px;
    color: white;
  }
  
  .product-price {
    font-size: var(--prodpriceFS);
    /*margin: 5px !important;*/
  }

  .price-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  
  .product-prevprice {
    font-size: 0.8rem;
    color: gray;
    margin-left: 10px !important;
    text-decoration: line-through;
  }
  
  .info-wrapper {
    display: flex;
    flex-flow: column wrap;
  }
  
  .product-discount {
    margin-left: 10px !important;
    font-size: 0.5rem;
    font-style: italic;
  }
  
  .infoflex-wrapper {
    display: flex;
    flex-flow: row wrap;
    margin-top: 1% !important;
    justify-content: flex-start;
    align-items: center;
  }
  
  
  /*------------------Stars-------------------------*/
  .stars {
    --percent: calc(var(--rating) / 5 * 100%);
  
    display: inline-block;
    font-size: var(--star-size);
    font-family: Times; // make sure ★ appears correctly
    line-height: 1;
    padding: 0px !important;
  
    &:before {
      content: "★★★★★";
      letter-spacing: 0.5px;
      font-size: 16px;  
      background: linear-gradient( 90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  
  @media only screen and (max-width: 540px) {

    .product-card {
      width: 100%;
      min-width: 150px;
      flex: 1 0 0;
      padding: 0px !important; /* space between cards*/
      margin: 0px !important;

    }
  
    .product-image img {
      width: 100%;
      height: 150px;
      object-fit: contain;
      margin: 0px !important;
      padding: 0 !important;
    }
  
    .image-wrapper {
      margin-left: 15px;
      margin-right: 15px;
      padding-left: 0% !important;
      padding-right: 0% !important;
    }
  
    .infoflex-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-top: 1% !important;
      align-items: center;
      justify-content: flex-start;
    }
  
    .info-wrapper {
      display: flex;
      flex-flow: column wrap;
      justify-content: space-between !important;
    }
  
    .product-name {
      width: 140px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: var(--prodnameFSM);
      text-align: left;
      margin-bottom: 5px !important;
    }
  
    .price-wrapper {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      justify-content: flex-start;
    }
  
    .product-price {
      font-size: var(--prodpriceFSM);
    }
  
    .product-prevprice {
      color: gray;
      font-weight: bold;
      font-size: var(--prodprevpriceFS);
      text-decoration: line-through;
    }
  
    .product-discount {
      font-size: var(--proddiscountFSM);
      font-style: italic;
      font-weight: bold;
      color: green;
    }
  
    .productrating-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;
      /* border: 1px solid lightgray; */
      justify-content: space-between;
    }
  
    .product-rating {
      width: fit-content;
      height: fit-content;
      flex-grow: 1;
      align-items: center;
      border-radius: 2px;
    }
  
    .total-ratings {
      /*margin-left: 1.5rem !important;*/
      font-size: 0.5rem;
      flex-grow: 1;
      font-style: italic;
      color: gray;
    }
  
    .total-reviews {
      /*margin-left: 2px !important;*/
      font-size: 0.5rem;
      flex-grow: 1;
      font-style: italic;
      color: gray;
    }
  }
  
`

export const Button = styled.button`

  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  cursor: pointer;


&:hover {
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
}

&:active {
  outline: none;
  border: none;
}

&:focus {
  outline: 0;
}
`

export const LoginContainer = styled.div`
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding-top: 30px;
  margin-left: 150px;
  margin-right: 150px;
  height: 300px;
  
  .bottom-text{
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
  }

  form{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    height: 150px;
  }

  .main-text{
    text-align: center;
  }

  fieldset{
    border:0;
  }

  button{
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    cursor: pointer;
    height: 25px;
    border-radius: 2px;
    color: white;
    background-color: #3fd865;;
  }

  form #email, #password{
      display: flex;
      flex-direction : column;
      justify-content: space-between;
  }

  form input{
    padding: 5px;
    font-size: 16px;
    color: gray !important;    
  }

  a{
    text-decoration: none;
    outline: none;
    border: none;
    color: yellow;
  }
`