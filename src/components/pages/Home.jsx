import React, { Component } from 'react';
import axios from 'axios'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
      }
      componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            this.setState({ posts: response.data });
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    state = {  }
    render() { 
        return ( 
            <div>
                {/* Main Wrapper Start */}

                {/* Page Content */}
                {/* Banner area Start */}

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
                                                <div className="single-slider single-slider1">
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

                                                <div className="single-slider single-slider2">
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
                {/* Banner area End */}
                {/* Combine Product area Start */}

                <section className="combine-product-area pb--80 pt--50">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title text-center mb-50">
                                    <h2>New Collections <i className="fa fa-shopping-cart"></i></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">

                                <div className="product-tab product-tab--3 content-grey-color">
                                    {/* Product Tab Head Start */}
                                    <div className="nav nav-pills zeref-product-tab" id="pills-tab" role="tablist">
                                        <a className="nav-link zeref-product-tab-link active" id="apples-tab" data-toggle="pill" href="#apples" role="tab" aria-controls="apples" aria-selected="true">Man</a>
                                        <a className="nav-link zeref-product-tab-link" id="avocodas-tab" data-toggle="pill" href="#avocodas" role="tab" aria-controls="avocodas" aria-selected="false">Women</a>
                                        <a className="nav-link zeref-product-tab-link" id="avocodas-2-tab" data-toggle="pill" href="#avocodas-2" role="tab" aria-controls="avocodas-2" aria-selected="false">Kids</a>
                                    </div>
                                    {/* Product Tab Head End */}
                                    {/* Product Tab Content Start */}



                                    <div className="tab-content zeref-ptab-content" id="pills-tabContent">
                                        <div className="tab-pane zeref-tab-pane show active" id="apples" role="tabpanel" aria-labelledby="apples-tab">
                                            {/* Women Product Area Start */}
                                            <div className="row">
                                                <div className="zeref-tproduct-carousel zeref-tproduct-carousel-area owl-carousel js-tanding-product-1">
                                                    {/* Product Box Start */}      
                                                    {
                                                        this.state.posts.map((item,index)=>
                                                    
                                                    <div className="col-lg-12 col-sm-12">
                                                        <div className="product-grid5">
                                                            <div className="product-image5">
                                                                <a href="# /">
                                                                    <img className="pic-1" alt="product image" src="assets/img/fashion/product/1.jpg" />
                                                                    <img className="pic-2" alt="product image" src="assets/img/fashion/product/2.jpg" />
                                                                </a>
                                                                <ul className="social">
                                                                    <li><a href="wishlist.html" data-tip="Add to Wishlist"><i className="fa fa fa-heart"></i></a></li>
                                                                    <li><a href="# /" data-tip="Quick View" data-toggle="modal" data-target="#productModal"><i className="fa fa-eye"></i></a></li>
                                                                    <li><a href="single-product.html" data-tip="Product Details"><i className="fa fa fa-link"></i></a></li>
                                                                </ul>
                                                                <a href="#" className="select-options"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                                            </div>
                                                            <div className="product-content">
                                                                <h3 className="title"><a href="#">{item.name}</a></h3>
                                                                <div className="price">$11.00 - $15.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                        )    
                                                }
                                                </div>
                                            </div>
                                            {/* Women Product Area End */}
                                        </div>

                                    </div>

                                    {/* Product Tab Content End */}

                                </div>


                            </div>
                        </div>
                    </div>
                </section>

                {/* Combine Product area End */}

                {/* Modal */}
                <div className="modal fade" id="productModal" tabindex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-5 col-sm-12">
                                        <div className="tab-content product-thumb-large">
                                            <div id="thumb1" className="tab-pane active show fade">
                                                <img src="assets/img/fashion/product/1.jpg" alt="product thumb" />
                                            </div>
                                            <div id="thumb2" className="tab-pane fade">
                                                <img src="assets/img/fashion/product/3.jpg" alt="product thumb" />
                                            </div>
                                            <div id="thumb3" className="tab-pane fade">
                                                <img src="assets/img/fashion/product/9.jpg" alt="product thumb" />
                                            </div>
                                            <div id="thumb4" className="tab-pane fade">
                                                <img src="assets/img/fashion/product/5.jpg" alt="product thumb" />
                                            </div>
                                        </div>
                                        <div className="product-thumbnail">
                                            <div className="thumb-menu owl-carousel" id="thumbmenu">
                                                <div className="thumb-menu-item">
                                                    <a href="#thumb1" data-toggle="tab" className="nav-link active">
                                                        <img src="assets/img/fashion/product/1.jpg" alt="product thumb" />
                                                    </a>
                                                </div>
                                                <div className="thumb-menu-item">
                                                    <a href="#thumb2" data-toggle="tab" className="nav-link">
                                                        <img src="assets/img/fashion/product/3.jpg" alt="product thumb" />
                                                    </a>
                                                </div>
                                                <div className="thumb-menu-item">
                                                    <a href="#thumb3" data-toggle="tab" className="nav-link">
                                                        <img src="assets/img/fashion/product/9.jpg" alt="product thumb" />
                                                    </a>
                                                </div>
                                                <div className="thumb-menu-item">
                                                    <a href="#thumb4" data-toggle="tab" className="nav-link">
                                                        <img src="assets/img/fashion/product/5.jpg" alt="product thumb" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12">
                                        <h3 className="product-title">Lorem ipsum solets</h3>
                                        <div className="product-price">
                                            <span className="sale-price">&dollar; 15.00</span>
                                        </div>
                                        <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore adipisci eligendi fuga reiciendis possimus et doloribus, quae explicabo! Dolore tenetur voluptate neque mollitia a hic, enim cumque natus repudiandae sequi? Sunt, ipsam! Temporibus facilis nam aperiam voluptatem ducimus, deserunt adipisci corrupti. Soluta ut asperiores est nihil porro. Obcaecati, velit repellendus.</p>
                                        <p><b>Availability:</b> In stock</p>
                                        <p><b>Condition:</b> New Product</p>
                                        <div className="product-varients">
                                            <div className="zeref-product-size pb--20">
                                                <span className="zeref-product-label"><b>Size: </b></span>
                                                <select className="zeref-product-select">
                                                    <option value="1">S</option>
                                                    <option value="2">M</option>
                                                    <option value="3">L</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="product-action-wrapper pb--20">
                                            <span><b>Quantity: </b></span>
                                            <div className="quantity">
                                                <input type="number" className="quantity-input" name="qty" id="qty" value="1" />
                                            </div>
                                        </div>
                                        <a href="#" className="btn">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overlay menu-overlay"></div>
            </div>
         );
    }
}
 
export default Home;