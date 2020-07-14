import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return ( 
            <div>
                {/* Footer top area Start */}
                <div className="footer footer-area black-footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row pt--80 pb--40 footer-widget-row">
                                {/* Footer Widget Start */}
                                <div className="col-lg-4 col-md-8 col-sm-8">
                                    <div className="footer-widget">
                                        <h3 className="widget-title footer-widget-title">Categories</h3>
                                        <div className="footer-logo-section-all">
                                            <div className="footer-logo-text">
                                                <a href="# "><img src="assets/img/logo-2.png" alt="" /></a>
                                            </div>
                                            <p>If you want to Get all the latest information on Events, Sales and Offers. Sign up for newsletter today. Be the first to know</p>
                                            <div className="subscribe">
                                                <form action="#">
                                                    <input placeholder="Enter Your Mail" type="email" />
                                                    <button value="Submit" type="submit" className="search-button" >
                                                        <i className="fa fa-paper-plane"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Footer Widget End */}

                                {/* Footer Widget Start */}
                                <div className="col-lg-2 col-md-4 col-sm-4">
                                    <div className="footer-widget">
                                        <h3 className="widget-title footer-widget-title">Quick Links</h3>
                                        <div className="menu-widget footer-menu-widget">
                                            <ul>
                                                <li><a href="#">Login </a></li>
                                                <li><a href="#">register </a></li>
                                                <li><a href="#">Wishlist </a></li>
                                                <li><a href="#">My Cart</a></li>
                                                <li><a href="#">Checkout </a></li>
                                                <li><a href="#">register </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Widget End */}

                                {/* Footer Widget Start */}
                                <div className="col-lg-3 col-md-5 col-sm-5">
                                    <div className="footer-widget">
                                        <h3 className="widget-title footer-widget-title">Get in touch</h3>
                                        <div className="address-widget footer-address-widget">
                                            <p><i className="fa fa-map-marker"></i> #183 Scelerisque Road 10. <br />Luxemburg. Alice</p>
                                            <p><i className="fa fa-phone"></i> +001 2233 456</p>
                                            <p><i className="fa fa-envelope"></i> <a href="mailo:demo@themeglass.com">demo@yahoo.com</a></p>
                                            <p><i className="fa fa-skype"></i> <a href="# ">zeref12445</a></p>
                                        </div>
                                    </div>
                                </div>
                                {/* Footer Widget End */}

                                {/* Footer Widget Start */}
                                <div className="col-lg-3 col-md-7 col-sm-7">
                                    <div className="footer-widget">
                                        <h3 className="widget-title footer-widget-title">Business hour</h3>
                                        <div className="footer-business">
                                            <p>we always ready for the support in the working days.</p>
                                            <ul>
                                                <li>
                                                    mon - fri <span>9.00 - 5.00 pm</span>
                                                </li>
                                                <li>
                                                    saturday <span>9.00 - 2.00 pm</span>
                                                </li>
                                                <li>
                                                    sunday <span>closed</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Footer Widget End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer top area End*/}

                {/* footer start */}
                <footer className="black-footer-bottom">
                    <div className="container">
                        <div className="footer-bottom footer-area-bottom">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="payment">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-cc-paypal"></i></a></li>
                                            <li><a href="#"><i className="fab fa-cc-visa"></i></a></li>
                                            <li><a href="#"><i className="fab fa-cc-mastercard"></i></a></li>
                                            <li><a href="#"><i className="fab fa-cc-discover"></i></a></li>
                                            <li><a href="#"><i className="fab fa-cc-amex"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    {/* Copyright Text Start */}
                                    <p className="copyright-text footer-copyright-text">
                                        © 2020 <a href="#">Cloud Production Front-end Team</a>. All rights reserved
                                </p>
                                    {/*Copyright Text End*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                { /*footer end* /}

        {/* Main Wrapper End */}

                {/* Scroll To Top */}
                <a className="scroll-to-top" href="#"><i className="fa fa-angle-double-up"></i></a>
            </div>
         );
    }
}

export default Footer;