import React from 'react';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Home from './Pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Signup from './Components/Signup';
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword";
import UpdateProfile from "./Components/UpdateProfile";
import Cart from './Pages/Cart';
import Details from './Pages/Details';
import Checkout from './Pages/Checkout';
import Address from './Pages/Address'
import {AuthProvider} from './contexts/AuthContext';
import { CartProvider } from "./contexts/CartContext";

function App() {


  return (
    <Router>
      <div className="App">
      <AuthProvider>
        <CartProvider>
        <Header />
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/cart" component={Cart} />
            <PrivateRoute path="/details" component={Details} />
            <PrivateRoute path="/checkout" component={Checkout} />
            <PrivateRoute path="/address" component={Address}/>
            <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
        <Footer/>
        </CartProvider>
      </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
