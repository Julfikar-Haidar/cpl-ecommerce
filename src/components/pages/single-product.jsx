import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'
import axios from 'axios'
class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {product: []};
      }

      componentDidMount(){
        axios.get('https://nodejs-backend-apis.herokuapp.com/api/product/'+this.props.match.params.id)
          .then(response => {
            this.setState({ product: response.data.data });
            console.log(response.data.data)
            
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    state = {}
    render() {
        console.log(this.props.match.params.id)
        
        return (
            <div>
                <Breadcrumb pageName="Single Product" />
                <div class="main-content-wrapper">
                    <div class="single-products-area section-padding">
                    {/* Single Product Start */}
                        <section class="single-product pb--40">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-5">
                                        {/* Tab Content Start */}
                                        <div class="tab-content product-thumb-large" id="myTabContent-3">
                                            <div class="tab-pane fade show active" id="product-large-one">
                                                <div class="single-product-img">
                                                    <img src="assets/img/fashion/product/1.jpg" alt="product" />
                                                    <a href="assets/img/fashion/product/1.jpg" class="popup-img-sproduct popup-link">
                                                        <i class="fa fa-search-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="product-large-two">
                                                <div class="single-product-img">
                                                    <img src="assets/img/fashion/product/3.jpg" alt="product" />
                                                    <a href="assets/img/fashion/product/3.jpg" class="popup-img-sproduct popup-link">
                                                        <i class="fa fa-search-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="product-large-three">
                                                <div class="single-product-img">
                                                    <img src="assets/img/fashion/product/5.jpg" alt="product" />
                                                    <a href="assets/img/fashion/product/5.jpg" class="popup-img-sproduct popup-link">
                                                        <i class="fa fa-search-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="product-large-four">
                                                <div class="single-product-img">
                                                    <img src="assets/img/fashion/product/7.jpg" alt="product" />
                                                    <a href="assets/img/fashion/product/7.jpg" class="popup-img-sproduct popup-link">
                                                        <i class="fa fa-search-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Tab Content End */}
                                    </div>
                                    <div class="col-lg-7">
                                        {/* Single Product Content Start */}
                                        {/* {this.state.products.map((item,index)=> */}
                                        <div class="single-product-content"> 
                                            <h3 class="product-title">Lorem ipsum solets</h3>
                                            <div class="product-price">
                                                <span class="sale-price">123tk</span>
                                            </div>
                                            <p class="product-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit perspiciatis voluptatibus adipisci rerum cum in cumque ratione, rem quaerat, eum fugit saepe itaque provident velit placeat beatae accusantium repellat vitae tempora? Asperiores rem laborum fuga dolore at tempora aut nisi, cumque modi et eius nam consectetur delectus doloremque libero corporis reprehenderit, eos a eveniet qui ducimus alias inventore ullam cupiditate! Modi, facere! Delectus iste adipisci facere rem. Alias ducimus numquam commodi quasi labore perspiciatis dolorum architecto ab? Doloribus assumenda dignissimos omnis ad et dolore. Recusandae eos iure nam blanditiis cum cupiditate exercitationem repellat perferendis? Dolor, eos iure? Aliquam, doloribus et.</p>
                                            <p><b>Availability:</b> In stock</p>
                                            {/* <p><b>Condition:</b> New Product</p> */}
                                            <div class="product-varients">
                                                {/* <div class="zeref-product-size pb--20">
                                                    <span class="zeref-product-label"><b>Size: </b></span>
                                                    <select class="zeref-product-select">
                                                        <option value="1">S</option>
                                                        <option value="2">M</option>
                                                        <option value="3">L</option>
                                                    </select>
                                                </div> */}
                                            </div>
                                            <div class="product-action-wrapper pb--20">
                                                <span class="zeref-product-label"><b>Quantity: </b></span>
                                                <div class="quantity">
                                                    <input type="number" class="quantity-input" name="qty" value="1" />
                                                <div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div></div>
                                            </div>
                                            <a href="#" class="btn">Add to cart</a> 
                                            <div class="social-share pt--20">
                                                <span>Share:</span>
                                                <ul class="social ml--30">
                                                    <li class="social-item"><a href="facebook.com" class="zeref-social-link"><i class="fab fa-facebook social-icon-modal"></i></a></li>
                                                    <li class="social-item"><a href="twitter.com" class="zeref-social-link"><i class="fab fa-twitter social-icon-modal"></i></a></li>
                                                    <li class="social-item"><a href="plus.google.com" class="zeref-social-link"><i class="fab fa-google-plus social-icon-modal"></i></a></li>
                                                    <li class="social-item"><a href="pinterest.com" class="zeref-social-link"><i class="fab fa-pinterest social-icon-modal"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* )} */}
                                        {/* Single Product Content End */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    {/* Single Product End */}
                    </div>
                </div>
            </div>
        );
    }
}
export default SingleProduct;