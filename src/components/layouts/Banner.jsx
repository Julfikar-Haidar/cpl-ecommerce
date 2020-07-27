import React, { Component } from 'react';

var divStyle = {
    
    backgroundImage: "url(" + "https://dummyimage.com/840x500/e81733/fff" + ")",
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

class Ban extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
                <div className="banner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="banner-slide-wrapper">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            {/* Category Nav Start */}
                                            <div className="category-nav category-nav--3">
                                                <h2 className="zeref-catnav-title" id="js-cat-nav-title"><i className="fa fa-bars"></i> <span>Categories</span></h2>
                                                <ul className="zeref-catnav-menu display-none-md" id="js-cat-nav">
                                                    <li className="zeref-category-nav-items has-children">
                                                        <a href="shop.html">Women</a>
                                                        <div className="category-submenu">
                                                            <div className="zeref-category-submenu">
                                                                <h3 className="zeref-category-submenu-title">Clothing</h3>
                                                                <ul>
                                                                    <li><a href="shop.html">Western Wear</a></li>
                                                                    <li><a href="shop.html">Night Wear</a></li>
                                                                    <li><a href="shop.html">Ethnic Wear</a></li>
                                                                    <li><a href="shop.html">Designer Wear</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="zeref-category-submenu">
                                                                <h3 className="zeref-category-submenu-title">Jwellery</h3>
                                                                <ul>
                                                                    <li><a href="shop.html">Bracelets</a></li>
                                                                    <li><a href="shop.html">Necklaces &amp; Pendent</a></li>
                                                                    <li><a href="shop.html">Pendants</a></li>
                                                                    <li><a href="shop.html">Pins &amp; Brooches</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="zeref-category-nav-items has-children">
                                                        <a href="shop.html">Man</a>
                                                        <div className="category-submenu">
                                                            <div className="zeref-category-submenu">
                                                                <h3 className="zeref-category-submenu-title">Clothing</h3>
                                                                <ul>
                                                                    <li><a href="shop.html">Western Wear</a></li>
                                                                    <li><a href="shop.html">Night Wear</a></li>
                                                                    <li><a href="shop.html">Ethnic Wear</a></li>
                                                                    <li><a href="shop.html">Designer Wear</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="zeref-category-submenu">
                                                                <h3 className="zeref-category-submenu-title">Shoes</h3>
                                                                <ul>
                                                                    <li><a href="shop.html">Sport Shoes</a></li>
                                                                    <li><a href="shop.html">Casual Shoes</a></li>
                                                                    <li><a href="shop.html">Leather Shoes</a></li>
                                                                    <li><a href="shop.html">Canvas shoes</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="zeref-category-nav-items has-children">
                                                        <a href="shop.html">Electronics</a>
                                                        <div className="category-submenu">
                                                            <div className="zeref-category-submenu">
                                                                <h3 className="zeref-category-submenu-title">Category 01</h3>
                                                                <ul>
                                                                    <li><a href="shop.html">Laptop</a></li>
                                                                    <li><a href="shop.html">Monitor</a></li>
                                                                    <li><a href="shop.html">Microphones</a></li>
                                                                    <li><a href="shop.html">Computer</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="zeref-category-submenu">
                                                                <h3 className="zeref-category-submenu-title">Category 02</h3>
                                                                <ul>
                                                                    <li><a href="shop.html">Headphone</a></li>
                                                                    <li><a href="shop.html">Mobile</a></li>
                                                                    <li><a href="shop.html">Pendrive</a></li>
                                                                    <li><a href="shop.html">Television</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="zeref-category-nav-items">
                                                        <a href="shop.html">Furniture</a>
                                                    </li>
                                                    <li className="zeref-category-nav-items">
                                                        <a href="shop.html">Accessories</a>
                                                    </li>
                                                    <li className="zeref-category-nav-items">
                                                        <a href="shop.html">Baby &amp; Kids</a>
                                                    </li>
                                                    <li className="zeref-category-nav-items">
                                                        <a href="shop.html">Games</a>
                                                    </li>
                                                    <li className="zeref-category-nav-items hidden-menu-item">
                                                        <a href="shop.html">Health & Beauty</a>
                                                    </li>
                                                    <li className="zeref-category-nav-items">
                                                        <a href="shop.html" className="js-expand-hidden-menu"> More Categories</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* Category Nav End */}
                                        </div>
                                        <div className="col-lg-9">
                                            {/* Slider area Start */}
                                            <div className="slider-wrapper slider-wrapper--3 owl-carousel" id="homepage-slider">
                                                {/* Single Slider Start */}
                                                <div className="single-slider " style={divStyle}>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12">
                                                                <div className="slider-content slider-content--2">
                                                                    <h1 className="heading-primary zeref-heading-primary" data-animation="fadeInUp" data-delay="0s" data-duration="2s">Awesome Collections</h1>
                                                                    <p className="zeref-slider-text" data-animation="fadeInUp" data-delay="1s" data-duration="2s">Get 30% Discount Limited time only</p>
                                                                    <a href="shop.html" className="btn slider-btn btn-style-6" data-animation="fadeInUp" data-delay="2s" data-duration="2s">Purchase Now</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Slider End */}
                                                {/* Single Slider Start */}

                                                <div className="single-slider " style={divStyle}>
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-xl-12 col-md-12">
                                                                <div className="slider-content slider-content--2">
                                                                    <h1 className="heading-primary zeref-heading-primary" data-animation="fadeInUp" data-delay="0s" data-duration="2s">Awesome Collections</h1>
                                                                    <p className="zeref-slider-text" data-animation="fadeInUp" data-delay="1s" data-duration="2s">Get 30% Discount Limited time only</p>
                                                                    <a href="shop.html" className="btn slider-btn btn-style-6" data-animation="fadeInUp" data-delay="2s" data-duration="2s">Purchase Now</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Slider End */}

                                            </div>
                                            {/* Slider area End */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
         );
    }
}
 
export default Ban;