import React from 'react';
import Home from './components/pages/Home'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Registration from './components/pages/Registration'
import Login from './components/pages/Login'
import Wishlist from './components/pages/Wishlist';
import Checkout from './components/pages/Checkout';
import Cart from './components/pages/Cart';
import Shop_list_view from './components/pages/Shop_list_view';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/wishlist" component={Wishlist}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/shop-list" component={Shop_list_view}/>
      </Switch>

      <Footer/>
    </div>
  );
}

export default App;

