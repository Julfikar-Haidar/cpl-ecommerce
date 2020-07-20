import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    // logout method will clear the session storage,localstorage and push to login page.
    logout() {
        sessionStorage.clear();
        localStorage.clear();
        this.props.history.push('/login');
    }
    render() { 
        
        let authenticationMenu

        if (!window.localStorage.getItem('token')) {
            authenticationMenu =<React.Fragment>
                                    <li className="zeref-mainmenu-itm">
                                        <Link to="/login" className="zeref-mainmenu-link">Login</Link>
                                    </li>
                                    <li className="zeref-mainmenu-itm">
                                        <Link to="/register" className="zeref-mainmenu-link">Register</Link>
                                    </li>
                                </React.Fragment>

                            } else {
                                authenticationMenu = <React.Fragment>
                                    <li className="zeref-mainmenu-itm">
                                        <Link className="zeref-mainmenu-link" onClick={this.logout}>Logout</Link>
                                    </li>
                                </React.Fragment>
                            }
        return ( 
            <div>
                {/* Header area Start */}
                <header className="header zeref-header">
                    <div className="header-bottom zeref-header-bottom fixed-header">
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-lg-2 col-md-2 col-sm-3 col-4 text-md-left d-flex align-items-center">
                                    <Link className="logo-box" to="/">
                                        <span className="ec-text">EC</span><span className="react-team">-ReactTeam</span>
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-md-1 col-sm-1 col-1 justify-content-md-end">
                                    <div className="zeref-header-bottom-right justify-content-md-end">
                                        <nav className="main-navigation zeref-main-navigation">
                                            {/* Mainmenu Start */}
                                            <ul className="mainmenu zeref-main-menu">
                                                <li className="zeref-mainmenu-itm menu-item-has-children">
                                                    <Link to="/" className="zeref-mainmenu-link">Home</Link>
                                                </li>
                                    
                                                <li className="zeref-mainmenu-itm menu-item-has-children">
                                                    <Link to="/shop-list" className="zeref-mainmenu-link">Shop List</Link>
                                                </li>
                                                
                                                <li className="zeref-mainmenu-itm menu-item-has-children">
                                                    <a href="#" className="zeref-mainmenu-link">Pages</a>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <Link to="/cart" className="mainmenu-sub-link">Cart</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/wishlist" className="mainmenu-sub-link">Wishlist</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/checkout" className="mainmenu-sub-link">Checkout</Link>
                                                        </li>
                                                        
                                                    </ul>
                                                </li>
                                                {authenticationMenu}
                                            </ul>
                                            {/*Mainmenu End */}
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-9 col-sm-8 col-7">
                                    <div className="zeref-header-bottom-right justify-content-md-end">
                                        {/* Header Cart Start */}
                                        <div className="header-cart header-area-cart">
                                            <a className="zeref-cart-toggle" id="cartDropdown">
                                                <i className="fa fa-shopping-cart header-shop-icon"></i>
                                                <sup className="cart-badge">0</sup>
                                            </a>
                                            <div className="cart-dropdown">
                                                <div
                                                    className="header-cart-content">
                                                    <a className="header-cart-close-btn" id="cart-close" href="#"><i className="fa fa-times"></i></a>
                                                    <div className="header-cart-item">
                                                        <div className="hcart-image">
                                                            <img src="assets/img/fashion/product/3.jpg" alt="product" />
                                                        </div>
                                                        <div className="hcart-content">
                                                            <h4><a href="single-product.html">Man dress</a> </h4>
                                                            <p>1 X &dollar;100</p>
                                                        </div>
                                                    </div>
                                                    <ul className="header-cart-list">
                                                        <li className="header-cart-single">
                                                            <span className="header-cart-single--title">Subtotal</span>
                                                            <span className="cart-amount">$100.00</span>
                                                        </li>
                                                    </ul>
                                                    <div className="header-cart-btn">
                                                        <a href="cart.html" className="btn btn-checkout btn-style-3">Cart</a>
                                                        <a href="checkout.html" className="btn btn-checkout btn-style-3">Checkout</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* Header Cart End */}
                                        <a id="sidebarCollapse">
                                            <i className="fa fa-user"></i>
                                        </a>
                                        <form className="head-form d-none d-sm-block">
                                            <input type="text" name="search" className="head-search" placeholder="Search" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="mobile-menu mobile__menu"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header area End */}

            </div>
         );
    }
}
 
export default withRouter(Header);