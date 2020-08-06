import React, { Component } from 'react';
class Sidebar extends Component {
    state = {}
    render() {
        return ( 

            <div>
                {/* Sidebar */}
                <nav id="sidebar">
                    <div id="dismiss">
                        <i className="fa fa-close"></i>
                    </div>
                    <div className="list-unstyled components">
                        <p>My Account</p>
                        <ul className="collapse list-unstyled">
                            <li>
                                <a href="#">My Cart</a>
                            </li>
                            <li>
                                <a href="#">My Wishlist</a>
                            </li>
                            <li>
                                <a href="#">Checkout</a>
                            </li>
                            <li>
                                <a href="#">Register</a>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>

                    <ul className="list-unstyled CTAs">
                        <li className="social-item"><a href="facebook.com" className="zeref-social-link zeref-link-item"><i className="fa fa-facebook"></i></a></li>
                        <li className="social-item"><a href="twitter.com" className="zeref-social-link zeref-link-item"><i className="fa fa-twitter"></i></a></li>
                        <li className="social-item"><a href="youtube.com" className="zeref-social-link zeref-link-item"><i className="fa fa-youtube"></i></a></li>
                        <li className="social-item"><a href="plus.google.com" className="zeref-social-link zeref-link-item"><i className="fa fa-google-plus"></i></a></li>
                        <li className="social-item"><a href="instagram.com" className="zeref-social-link zeref-link-item"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </nav>
                {/* Sidebar End */}
            </div>
         );
    }
}

export default Sidebar;