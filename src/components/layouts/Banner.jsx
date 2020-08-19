import React, { Component } from 'react';
const $ = window.$;

var divStyle = {
    backgroundImage: "url(" + "https://dummyimage.com/840x500/ed116d/f2f3fa&text=Cloud+Production+LTD" + ")",
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
}



class Ban extends Component {

    componentDidMount() {
        /**********************
        *Slider Activation
        ***********************/
        var homeSlider = $('#homepage-slider');

        homeSlider.owlCarousel({
            items: 1,
            smartSpeed: 1000,
            loop:true,
            nav: true,
            dots: true,
            autoplay: false,
            autoplayTimeout: 3000,
            navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">']
        });

        homeSlider.on('translate.owl.carousel', function(){
            var animation = $('[data-animation]');
            animation.each(function(){
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $('[data-delay]').each(function(){
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });


        $('[data-duration]').each(function(){
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        homeSlider.on('translated.owl.carousel', function(){
            var layer = homeSlider.find('.owl-item.active').find('[data-animation]');
            layer.each(function(){
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
       

    }
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
                                                        <a href="shop.html">Electronics</a>
                                                        <div className="category-submenu">
                                                            <div className="zeref-category-submenu">
                                                                <h3 className="zeref-category-submenu-title">Electronics </h3>
                                                                <ul>
                                                                    <li><a href="shop.html">TV & Video</a></li>
                                                                    <li><a href="shop.html">Audio & Home Theater</a></li>
                                                                    <li><a href="shop.html">Computers</a></li>
                                                                    <li><a href="shop.html">Camera & Photo</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="zeref-category-submenu">
                                                                <h3 className="zeref-category-submenu-title">Gadgets</h3>
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
                                                        <a href="shop.html">Industrial</a>
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
                                                                <h3 className="zeref-category-submenu-title">Games</h3>
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
                                                        <a href="shop.html">Smartphones</a>
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
                                                        <a href="shop.html">Automotive</a>
                                                    </li>
                                                    <li className="zeref-category-nav-items">
                                                        <a href="shop.html">Tools</a>
                                                    </li>
                                                    <li className="zeref-category-nav-items">
                                                        <a href="shop.html">Baby &amp; Kids</a>
                                                    </li>
                                                    <li className="zeref-category-nav-items">
                                                        <a href="shop.html">Games</a>
                                                    </li>
                                                    <li className="zeref-category-nav-items hidden-menu-item">
                                                        <a href="shop.html">Music</a>
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