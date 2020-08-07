import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'
import Modal from 'react-bootstrap4-modal';
import Cartcounter from '../layouts/Cart-counter'
import axios from 'axios'
class SingleProduct extends Component {
    
    constructor(props) {
        super(props);
        // this.StockCheck = this.StockCheck.bind(this);

        this.state = {
            product: [],
            modal: '',
            count:0,
            productListCount: 0,
            productPrice:0
           
        };

    }

    componentDidMount() {
        axios.get('https://nodejs-backend-apis.herokuapp.com/api/product/' + this.props.match.params.id)
            .then(response => {
                this.setState({ product: response.data.data });
                console.log(response.data.data)
                console.log(this.state.product.quantity)

            })
            .catch(function (error) {
                console.log (error);
            })
    }
    


    increment() {

        if (this.state.count < this.state.product.quantity) {
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
        }
        else {
            this.setState({
                modal: 'StockOut'
            })

        }

    }

    decrement() {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
            console.log(this.state.count)
        }
    }

    cartAdd(item) {
        let productlist =JSON.parse(localStorage.getItem('myProduct')) || []

        if(this.state.count>0){
            productlist.push(item)
            this.setState({
            productListCount: productlist.length,
        })
        localStorage.setItem('myProduct', JSON.stringify(productlist))

        }
        else{
            this.setState({
                modal: 'emptyValue'
            })
        }

         
         
        //  console.log('length',this.state.productListCount)
         console.log('price',productlist)
        

        
         
    }

    /* Close modal method start */
    closeModal() {
        this.setState({
            modal: ''
        })
        this.props.history.push('/single-product/:id');
    }
    /* Close modal method end */

// stockCheck(){

// }  



    state = {}
    render() {
        let { products,productListCount} = this.state

        return (
            <div>
                <Breadcrumb pageName="Single Product" />
                <Cartcounter productListCount={productListCount}  />
                <h1>Cart count {productListCount}</h1>
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
                                        {/* {this.state.product.map((item)=> */}
                                        <div class="single-product-content">
                                            <h3 class="product-title">{this.state.product.name}</h3>
                                            <div class="product-price">
                                                <span class="sale-price">{this.state.product.price}TK</span>
                                            </div>
                                            <p class="product-desc">{this.state.product.description}</p>
                                            <p><b>Availability:</b> In stock </p>
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
                                                    <input type="number" max={this.state.product.quantity} min={this.state.count} class="quantity-input" name="qty" value={this.state.count} />
                                                    <div class="dec qtybutton " onClick={() => this.decrement()}><i class="fa fa-angle-down"></i></div>
                                                    <div class="inc qtybutton" onClick={() => this.increment()} ><i class="fa fa-angle-up"></i></div>
                                                </div>
                                            </div>
                                            <a href="#" class="btn" onClick={()=>this.cartAdd(this.state.product)}>Add to cart</a>

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
                        {/* Login successfull Modal Start*/}
                        <Modal className="register-success-modal" visible={this.state.modal === 'StockOut' ? true : false}>
                            <div className="alert alert-success user-success-message">
                                            <strong>Available Quantity For '{this.state.product.name}' : {this.state.product.quantity}</strong>
                                <button type="button" className="close success-close" data-dismiss="modal" aria-label="Close" onClick={() => this.closeModal()}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </Modal>
                        <Modal className="register-success-modal" visible={this.state.modal === 'emptyValue' ? true : false}>
                            <div className="alert alert-success user-success-message">
                                            <strong>Empty Quantity Field</strong>
                                <button type="button" className="close success-close" data-dismiss="modal" aria-label="Close" onClick={() => this.closeModal()}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </Modal>
                        {/* Login successfull Modal End */}
                    </div>
                </div>
            </div>
        );
    }
}
export default SingleProduct;