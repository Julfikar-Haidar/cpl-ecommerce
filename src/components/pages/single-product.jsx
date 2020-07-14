import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'

class SingleProduct extends Component {
    state = {}
    render() {
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
                                <div class="single-product-content"> 
                                        <h3 class="product-title">Lorem ipsum solets</h3>
                                        <div class="product-price">
                                            <span class="sale-price">$ 15.00</span>
                                        </div>
                                        <p class="product-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit perspiciatis voluptatibus adipisci rerum cum in cumque ratione, rem quaerat, eum fugit saepe itaque provident velit placeat beatae accusantium repellat vitae tempora? Asperiores rem laborum fuga dolore at tempora aut nisi, cumque modi et eius nam consectetur delectus doloremque libero corporis reprehenderit, eos a eveniet qui ducimus alias inventore ullam cupiditate! Modi, facere! Delectus iste adipisci facere rem. Alias ducimus numquam commodi quasi labore perspiciatis dolorum architecto ab? Doloribus assumenda dignissimos omnis ad et dolore. Recusandae eos iure nam blanditiis cum cupiditate exercitationem repellat perferendis? Dolor, eos iure? Aliquam, doloribus et.</p>
                                        <p><b>Availability:</b> In stock</p>
                                        <p><b>Condition:</b> New Product</p>
                                        <div class="product-varients">
                                            <div class="zeref-product-size pb--20">
                                                <span class="zeref-product-label"><b>Size: </b></span>
                                                <select class="zeref-product-select">
                                                    <option value="1">S</option>
                                                    <option value="2">M</option>
                                                    <option value="3">L</option>
                                                </select>
                                            </div>
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
                               {/* Single Product Content End */}
                            </div>
                        </div>
                    </div>
                    
                </section>
               {/* Single Product End */}

               {/* Single Product Tab Start */}
                <section class="single-product-tab pb--40">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="single-zeref-product-tab nav nav-tab" id="singleProductTab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-desc-tab" data-toggle="tab" href="#nav-desc" role="tab" aria-controls="nav-desc" aria-selected="true">Description</a>
                                    <a class="nav-item nav-link" id="nav-review-tab" data-toggle="tab" href="#nav-review" role="tab" aria-controls="nav-review" aria-selected="true">review Details</a>
                                </div>
                                <div class="single-zeref-ptab-content tab-content">
                                    <div class="tab-pane fade show active" id="nav-desc" role="tabpanel" aria-labelledby="nav-desc-tab">
                                        <p class="product-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt incidunt laudantium nisi, enim eligendi suscipit iste maiores ratione molestiae soluta in illum, praesentium possimus, iure ad. Minima aspernatur dolor dolorum vero officia repudiandae! Corporis esse libero mollitia nobis debitis soluta facilis vero numquam voluptatum, voluptatibus est ducimus labore impedit consequuntur minus aspernatur incidunt. Provident, quos repellendus facilis obcaecati, id, autem minima tempore facere eos molestias velit magnam accusamus? Facere reprehenderit necessitatibus dicta nihil modi eveniet at perspiciatis, ullam dolorem numquam sapiente quis vitae reiciendis, corrupti incidunt aliquid, odit sed iure ex nemo maxime voluptate quia optio voluptas! Recusandae, enim ducimus!</p>
                                    </div>
                                    <div class="tab-pane" role="tabpanel" id="nav-review" aria-labelledby="nav-review-tab">
                                        <div class="review-area">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="review-area">
                                                        <h2>Write your review</h2>
                                                        <div class="your-rating">
                                                            <h5>Quality</h5>
                                                            <span class="ratings">
                                                                <a href="#"><i class="fa fa-star"></i></a>
                                                                <a href="#"><i class="fa fa-star"></i></a>
                                                                <a href="#"><i class="fa fa-star"></i></a>
                                                                <a href="#"><i class="fa fa-star"></i></a>
                                                                <a href="#"><i class="fa fa-star"></i></a>
                                                            </span>
                                                        </div>
                                                        <form class="review-form">
                                                            <div class="review-zeref-form-group">
                                                                <label for="reviewTitle" class="review-form-label">Title <sup>*</sup></label>
                                                                <input id="reviewTitle" type="text" name="reveiw-title" class="review-zeref-input-form" />
                                                            </div>
                                                            <div class="review-zeref-form-group">
                                                                <label for="authorName" class="review-form-label">Name <sup>*</sup></label>
                                                                <input id="authorName" type="text" class="review-zeref-input-form" />
                                                            </div>
                                                            <div class="review-zeref-form-group">
                                                                <label for="review" class="review-form-label">Your review <sup>*</sup></label>
                                                                <textarea id="review" class="review-zeref-input-form textarea-review"></textarea>
                                                            </div>
                                                            <div class="review-btn-group">
                                                                <button type="submit" class="btn review-form__btn">Submit</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               {/* Single Product Tab End */}

              </div>
              </div>
              </div>
        );
    }
}
export default SingleProduct;