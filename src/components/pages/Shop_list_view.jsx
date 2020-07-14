import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'

class Shop_list_view extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
                
            })
    }

    render() {
        var { isLoaded, items } = this.state;
        console.log(items);
        return (
            <div>
                <Breadcrumb />
                <div className="main-content-wrapper">
                    <div className="shop-area section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 order-lg-1 order-2">
                                    {/* <!-- Sidebar Start --> */}
                                    <aside className="sidebar shop-sidebar">
                                        <div className="search-filter">

                                            {/* <!-- Category Search filter Start --> */}
                                            <div className="filter-box mb--30">
                                                <div className="filter-title">
                                                    <h2>Filter by categories</h2>
                                                </div>
                                                <ul className="search-filter-list">
                                                    <li className="custom-checkbox">
                                                        <input type="checkbox" name="bookandboardgame" id="bookandboardgame" className="zeref-checkbox" />
                                                        <label for="bookandboardgame" className="zeref-checkbox-label">Dresses</label>
                                                    </li>
                                                    <li className="custom-checkbox">
                                                        <input type="checkbox" name="babydols" id="1" className="zeref-checkbox" />
                                                        <label for="1" className="zeref-checkbox-label">Accessories</label>
                                                    </li>
                                                    <li className="custom-checkbox">
                                                        <input type="checkbox" name="babydols" id="2" className="zeref-checkbox" />
                                                        <label for="2" className="zeref-checkbox-label">Handbag</label>
                                                    </li>
                                                    <li className="custom-checkbox">
                                                        <input type="checkbox" name="babydols" id="3" className="zeref-checkbox" />
                                                        <label for="3" className="zeref-checkbox-label">Watches</label>
                                                    </li>
                                                    <li className="custom-checkbox">
                                                        <input type="checkbox" name="babydols" id="4" className="zeref-checkbox" />
                                                        <label for="4" className="zeref-checkbox-label">Jewelery</label>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <!-- Category Search filter End --> */}

                                            {/* <!-- Brand Search filter Start --> */}
                                    <div className="filter-box mb--30">
                                                <div className="filter-title">
                                                    <h2>Filter by brand</h2>
                                                </div>
                                                <ul className="search-filter-list">
                                                    <li className="custom-checkbox">
                                                        <input type="checkbox" name="bookandboardgame" id="cat" className="zeref-checkbox" />
                                                        <label for="cat" className="zeref-checkbox-label">Nike</label>
                                                    </li>
                                                    <li className="custom-checkbox">
                                                        <input type="checkbox" name="babydols" id="5" className="zeref-checkbox" />
                                                        <label for="5" className="zeref-checkbox-label">zeref</label>
                                                    </li>
                                                    <li className="custom-checkbox">
                                                        <input type="checkbox" name="babydols" id="6" className="zeref-checkbox" />
                                                        <label for="6" className="zeref-checkbox-label">Lorem</label>
                                                    </li>
                                                    <li className="custom-checkbox">
                                                        <input type="checkbox" name="babydols" id="7" className="zeref-checkbox" />
                                                        <label for="7" className="zeref-checkbox-label">Ipsum</label>
                                                    </li>
                                                    <li className="custom-checkbox">
                                                        <input type="checkbox" name="babydols" id="8" className="zeref-checkbox" />
                                                        <label for="8" className="zeref-checkbox-label">Dolet</label>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <!-- Category Search filter End --> */}

                                            {/* <!-- Price Search filter Start --> */}

                                            <div className="filter-box mb--30">
                                                <div className="filter-title">
                                                    <h2>Filter by price</h2>
                                                </div>
                                                <ul className="search-filter-list">
                                                    <li className="custom-radio">
                                                        <input type="radio" name="price" id="sixtentoeighteen" className="zeref-radio-input" />
                                                        <label for="sixtentoeighteen" className="zeref-radio-label"><span></span> $10.00 - $15.00 (5) </label>
                                                    </li>
                                                    <li className="custom-radio">
                                                        <input type="radio" name="price" id="twentyfivetothirtytwo" className="zeref-radio-input" />
                                                        <label for="twentyfivetothirtytwo" className="zeref-radio-label"><span></span> $16.00 - $25.00 (22)</label>
                                                    </li>
                                                    <li className="custom-radio">
                                                        <input type="radio" name="price" id="fiftytofiftythree" className="zeref-radio-input" />
                                                        <label for="fiftytofiftythree" className="zeref-radio-label"><span></span> $26.00 - $35.00 (53)</label>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* <!-- Price Search filter End --> */}

                                            {/* <!-- Size Search filter Start --> */}
                                    <div className="filter-box mb--30">
                                                <div className="filter-title">
                                                    <h2>Tags</h2>
                                                </div>
                                                <ul className="tag-list">
                                                    <li><a href="#">Man</a></li>
                                                    <li><a href="#">Women</a></li>
                                                    <li><a href="#">Accessories</a></li>
                                                    <li><a href="#">Shoes</a></li>
                                                    <li><a href="#">Children</a></li>
                                                    <li><a href="#">Toys</a></li>
                                                    <li><a href="#">Games</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- Size Search filter End --> */}

                                            {/* <!-- Recent Post Widget Start --> */}
                                    <div className="recent-post-widget filter-box">
                                                <div className="filter-title">
                                                    <h2>Best Product</h2>
                                                </div>
                                                <div className="single-recent-post">
                                                    <a href="#" className="single-post-thumb">
                                                        <img src="assets/img/blog/1.jpg" alt="Blog Thumb" />
                                                    </a>
                                                    <div className="single-post-content">
                                                        <a href="#" className="single-post-title">Awesome Dress</a>
                                                        <a href="#" className="single-post-date">12 February, 2020</a>
                                                    </div>
                                                </div>
                                                <div className="single-recent-post">
                                                    <a href="#" className="single-post-thumb">
                                                        <img src="assets/img/blog/2.jpg" alt="Blog Thumb" />
                                                    </a>
                                                    <div className="single-post-content">
                                                        <a href="#" className="single-post-title">Awesome Dress</a>
                                                        <a href="#" className="single-post-date">12 February, 2020</a>
                                                    </div>
                                                </div>
                                                <div className="single-recent-post">
                                                    <a href="#" className="single-post-thumb">
                                                        <img src="assets/img/blog/3.jpg" alt="Blog Thumb" />
                                                    </a>
                                                    <div className="single-post-content">
                                                        <a href="#" className="single-post-title">Awesome Dress</a>
                                                        <a href="#" className="single-post-date">12 February, 2020</a>
                                                    </div>
                                                </div>
                                                <div className="single-recent-post">
                                                    <a href="#" className="single-post-thumb">
                                                        <img src="assets/img/blog/4.jpg" alt="Blog Thumb" />
                                                    </a>
                                                    <div className="single-post-content">
                                                        <a href="#" className="single-post-title">Awesome Dress</a>
                                                        <a href="#" className="single-post-date">12 February, 2020</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Recent Post Widget End --> */}
                                        </div>
                                    </aside>
                                    {/* <!-- Sidebar End --> */}
                        </div>
                                <div className="col-lg-9 order-lg-2 order-1">
                                    <div className="shop-toolbar d-flex flex-md-row flex-column justify-content-between align-items-md-center">
                                        <div className="zeref-shop-grid-list">
                                            <ul className="nav">
                                                <li>
                                                    <a data-toggle="tab" href="#grid"><i className="fa fa-th"></i></a>
                                                </li>
                                                <li>
                                                    <a className="active" data-toggle="tab" href="#list"><i className="fa fa-list"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="zeref-short">
                                            <label>Short By:</label>
                                            <select className="short-select" style={{ display: "none" }}>
                                                <option value="1">Position</option>
                                                <option value="2">Name, A to Z</option>
                                                <option value="3">Name, Z to A</option>
                                                <option value="4">Price, low to high</option>
                                                <option value="5">Price, high to low</option>
                                            </select><div className="nice-select short-select" tabindex="0"><span className="current">Position</span><ul className="list"><li data-value="1" className="option selected">Position</li><li data-value="2" className="option">Name, A to Z</li><li data-value="3" className="option">Name, Z to A</li><li data-value="4" className="option">Price, low to high</li><li data-value="5" className="option">Price, high to low</li></ul></div>
                                        </div>
                                    </div>
                                    {/* <!-- Shop Layout Start --> */}
                                    <div className="main-shop-wrapper">
                                        <div className="tab-content" id="myTabContent-2">
                                            <div className="tab-pane" id="grid">
                                                <div className="product-grid-view">
                                                    <div className="row">
                                                        <div className="col-xl-4 col-md-6">
                                                            {/* <!-- Product Box Start --> */}
                                                            <div className="product-grid7 mb--30">
                                                                <div className="product-image7">
                                                                    <a href="#">
                                                                        <img className="pic-1" alt="product image" src="assets/img/fashion/product/1.jpg" />
                                                                        <img className="pic-2" alt="product image" src="assets/img/fashion/product/2.jpg" />
                                                                    </a>
                                                                    <ul className="social">
                                                                        <li><a href="#" data-toggle="modal" data-target="#productModal"> <i className="fa fa-eye"></i> </a></li>
                                                                        <li><a href="wishlist.html"><i className="fa fa-heart"></i> </a></li>
                                                                        <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> </a></li>
                                                                        <li><a href="single-product.html"><i className="fa fa-link"></i> </a></li>
                                                                    </ul>
                                                                    <span className="product-new-label">New</span>
                                                                </div>
                                                                <div className="product-content">
                                                                    <h3 className="title"><a href="#">Girls Tops</a></h3>
                                                                    <ul className="rating">
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                    </ul>
                                                                    <div className="price">$15.00
                                                                <span>$20.00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!-- Product Box End --> */}
                                                        </div>
                                                        <div className="col-xl-4 col-md-6">
                                                            {/* <!-- Product Box Start --> */}
                                                            <div className="product-grid7 mb--30">
                                                                <div className="product-image7">
                                                                    <a href="#">
                                                                        <img className="pic-1" alt="product image" src="assets/img/fashion/product/3.jpg" />
                                                                        <img className="pic-2" alt="product image" src="assets/img/fashion/product/4.jpg" />
                                                                    </a>
                                                                    <ul className="social">
                                                                        <li><a href="#" data-toggle="modal" data-target="#productModal"> <i className="fa fa-eye"></i> </a></li>
                                                                        <li><a href="wishlist.html"><i className="fa fa-heart"></i> </a></li>
                                                                        <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> </a></li>
                                                                        <li><a href="single-product.html"><i className="fa fa-link"></i> </a></li>
                                                                    </ul>
                                                                    <span className="product-new-label">New</span>
                                                                </div>
                                                                <div className="product-content">
                                                                    <h3 className="title"><a href="#">Girls Tops</a></h3>
                                                                    <ul className="rating">
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                    </ul>
                                                                    <div className="price">$15.00
                                                                <span>$20.00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!-- Product Box End --> */}
                                                        </div>
                                                        <div className="col-xl-4 col-md-6">
                                                            {/* <!-- Product Box Start --> */}
                                                            <div className="product-grid7 mb--30">
                                                                <div className="product-image7">
                                                                    <a href="#">
                                                                        <img className="pic-1" alt="product image" src="assets/img/fashion/product/5.jpg" />
                                                                        <img className="pic-2" alt="product image" src="assets/img/fashion/product/6.jpg" />
                                                                    </a>
                                                                    <ul className="social">
                                                                        <li><a href="#" data-toggle="modal" data-target="#productModal"> <i className="fa fa-eye"></i> </a></li>
                                                                        <li><a href="wishlist.html"><i className="fa fa-heart"></i> </a></li>
                                                                        <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> </a></li>
                                                                        <li><a href="single-product.html"><i className="fa fa-link"></i> </a></li>
                                                                    </ul>
                                                                    <span className="product-new-label">New</span>
                                                                </div>
                                                                <div className="product-content">
                                                                    <h3 className="title"><a href="#">Girls Tops</a></h3>
                                                                    <ul className="rating">
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                        <li className="fa fa-star"></li>
                                                                    </ul>
                                                                    <div className="price">$15.00
                                                                <span>$20.00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!-- Product Box End --> */}
                                                        </div>
                                                        <div className="col-xl-4 col-md-6">
                                                            {/* <!-- Product Box Start --> */}
                                                            <div className="product-grid7 mb--30">
                                                                <div className="product-image7">
                                                                    <a href="#">
                                                                        <img className="pic-1" alt="product image" src="assets/img/fashion/product/7.jpg"/>
                                                                            <img className="pic-2" alt="product image" src="assets/img/fashion/product/8.jpg" />
                                                            </a>
                                                                        <ul className="social">
                                                                            <li><a href="#" data-toggle="modal" data-target="#productModal"> <i className="fa fa-eye"></i> </a></li>
                                                                            <li><a href="wishlist.html"><i className="fa fa-heart"></i> </a></li>
                                                                            <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> </a></li>
                                                                            <li><a href="single-product.html"><i className="fa fa-link"></i> </a></li>
                                                                        </ul>
                                                                        <span className="product-new-label">New</span>
                                                        </div>
                                                                    <div className="product-content">
                                                                        <h3 className="title"><a href="#">Girls Tops</a></h3>
                                                                        <ul className="rating">
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                        </ul>
                                                                        <div className="price">$15.00
                                                                <span>$20.00</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- Product Box End --> */}
                                                            </div>
                                                            <div className="col-xl-4 col-md-6">
                                                                {/* <!-- Product Box Start --> */}
                                                                <div className="product-grid7 mb--30">
                                                                    <div className="product-image7">
                                                                        <a href="#">
                                                                            <img className="pic-1" alt="product image" src="assets/img/fashion/product/9.jpg" />
                                                                            <img className="pic-2" alt="product image" src="assets/img/fashion/product/10.jpg" />
                                                                        </a>
                                                                        <ul className="social">
                                                                            <li><a href="#" data-toggle="modal" data-target="#productModal"> <i className="fa fa-eye"></i> </a></li>
                                                                            <li><a href="wishlist.html"><i className="fa fa-heart"></i> </a></li>
                                                                            <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> </a></li>
                                                                            <li><a href="single-product.html"><i className="fa fa-link"></i> </a></li>
                                                                        </ul>
                                                                        <span className="product-new-label">New</span>
                                                                    </div>
                                                                    <div className="product-content">
                                                                        <h3 className="title"><a href="#">Girls Tops</a></h3>
                                                                        <ul className="rating">
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                        </ul>
                                                                        <div className="price">$15.00
                                                                <span>$20.00</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- Product Box End --> */}
                                                            </div>
                                                            <div className="col-xl-4 col-md-6">
                                                                {/* <!-- Product Box Start --> */}
                                                                <div className="product-grid7 mb--30">
                                                                    <div className="product-image7">
                                                                        <a href="#">
                                                                            <img className="pic-1" alt="product image" src="assets/img/fashion/product/11.jpg" />
                                                                            <img className="pic-2" alt="product image" src="assets/img/fashion/product/12.jpg" />
                                                                        </a>
                                                                        <ul className="social">
                                                                            <li><a href="#" data-toggle="modal" data-target="#productModal"> <i className="fa fa-eye"></i> </a></li>
                                                                            <li><a href="wishlist.html"><i className="fa fa-heart"></i> </a></li>
                                                                            <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> </a></li>
                                                                            <li><a href="single-product.html"><i className="fa fa-link"></i> </a></li>
                                                                        </ul>
                                                                        <span className="product-new-label">New</span>
                                                                    </div>
                                                                    <div className="product-content">
                                                                        <h3 className="title"><a href="#">Girls Tops</a></h3>
                                                                        <ul className="rating">
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                        </ul>
                                                                        <div className="price">$15.00
                                                                <span>$20.00</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- Product Box End --> */}
                                                            </div>
                                                            <div className="col-xl-4 col-md-6">

                                                                {/* <!-- Product Box Start --> */}
                                                                <div className="product-grid7 mb--30">
                                                                    <div className="product-image7">
                                                                        <a href="#">
                                                                            <img className="pic-1" alt="product image" src="assets/img/fashion/product/13.jpg" />
                                                                            <img className="pic-2" alt="product image" src="assets/img/fashion/product/14.jpg" />
                                                                        </a>
                                                                        <ul className="social">
                                                                            <li><a href="#" data-toggle="modal" data-target="#productModal"> <i className="fa fa-eye"></i> </a></li>
                                                                            <li><a href="wishlist.html"><i className="fa fa-heart"></i> </a></li>
                                                                            <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> </a></li>
                                                                            <li><a href="single-product.html"><i className="fa fa-link"></i> </a></li>
                                                                        </ul>
                                                                        <span className="product-new-label">New</span>
                                                                    </div>
                                                                    <div className="product-content">
                                                                        <h3 className="title"><a href="#">Girls Tops</a></h3>
                                                                        <ul className="rating">
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                        </ul>
                                                                        <div className="price">$15.00
                                                                <span>$20.00</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- Product Box End --> */}
                                                            </div>
                                                            <div className="col-xl-4 col-md-6">
                                                                {/* <!-- Product Box Start --> */}
                                                                <div className="product-grid7 mb--30">
                                                                    <div className="product-image7">
                                                                        <a href="#">
                                                                            <img className="pic-1" alt="product image" src="assets/img/fashion/product/15.jpg" />
                                                                            <img className="pic-2" alt="product image" src="assets/img/fashion/product/16.jpg" />
                                                                        </a>
                                                                        <ul className="social">
                                                                            <li><a href="#" data-toggle="modal" data-target="#productModal"> <i className="fa fa-eye"></i> </a></li>
                                                                            <li><a href="wishlist.html"><i className="fa fa-heart"></i> </a></li>
                                                                            <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> </a></li>
                                                                            <li><a href="single-product.html"><i className="fa fa-link"></i> </a></li>
                                                                        </ul>
                                                                        <span className="product-new-label">New</span>
                                                                    </div>
                                                                    <div className="product-content">
                                                                        <h3 className="title"><a href="#">Girls Tops</a></h3>
                                                                        <ul className="rating">
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                        </ul>
                                                                        <div className="price">$15.00
                                                                <span>$20.00</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- Product Box End --> */}
                                                            </div>
                                                            <div className="col-xl-4 col-md-6">
                                                                {/* <!-- Product Box Start --> */}
                                                                <div className="product-grid7 mb--30">
                                                                    <div className="product-image7">
                                                                        <a href="#">
                                                                            <img className="pic-1" alt="product image" src="assets/img/fashion/product/1.jpg" />
                                                                            <img className="pic-2" alt="product image" src="assets/img/fashion/product/2.jpg" />
                                                                        </a>
                                                                        <ul className="social">
                                                                            <li><a href="#" data-toggle="modal" data-target="#productModal"> <i className="fa fa-eye"></i> </a></li>
                                                                            <li><a href="wishlist.html"><i className="fa fa-heart"></i> </a></li>
                                                                            <li><a href="cart.html"><i className="fa fa-shopping-cart"></i> </a></li>
                                                                            <li><a href="single-product.html"><i className="fa fa-link"></i> </a></li>
                                                                        </ul>
                                                                        <span className="product-new-label">New</span>
                                                                    </div>
                                                                    <div className="product-content">
                                                                        <h3 className="title"><a href="#">Girls Tops</a></h3>
                                                                        <ul className="rating">
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                            <li className="fa fa-star"></li>
                                                                        </ul>
                                                                        <div className="price">$15.00
                                                                <span>$20.00</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- Product Box End --> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane show active" id="list">
                                                    <div className="product-list-view">
                                                        {/* paste here start */}
                                                    <ul>
                                                        {items.map((value, index) => {
                                                            return <li key={index}>{value.name}</li>
                                                        })}
                                                    </ul>
                                                    {/* paste end */}
                                                       </div>
                                                </div>
                                            </div>
                                            <div className="row mb-md--30">
                                                <div className="col-12 text-center">
                                                    <ul className="pagination">
                                                        <li><a href="#">1</a></li>
                                                        <li><a href="#">2</a></li>
                                                        <li><a href="#">3</a></li>
                                                        <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Shop Layout End --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          );
    }
}

export default Shop_list_view;