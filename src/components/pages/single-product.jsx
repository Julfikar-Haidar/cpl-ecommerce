import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'
import Modal from 'react-bootstrap4-modal';
import Cartcounter from '../layouts/Cart-counter'
import axios from 'axios'
// import Cartcounter from '../layouts/Cart-counter'
class SingleProduct extends Component {

    constructor(props) {
        super(props);
        // this.StockCheck = this.StockCheck.bind(this);

        this.state = {
            product: [],
            modal: '',
            count: 0,
            productListCount: 0,

            productPrice: '',
            total_amount: 0,
            total_qty: 0,

            single_item_qty:0,
            buy_qty_hold: 0



        };

    }

    componentDidMount() {
        let total_price = 0
        axios.get('https://nodejs-backend-apis.herokuapp.com/api/product/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    product: response.data.data,
                });


            })
            .catch(function (error) {
                console.log(error);
            })

        const productCollect = JSON.parse(window.localStorage.getItem('myProduct')) || []
        let totalPrice
        let single_qty
        totalPrice = Number(window.localStorage.getItem('totalPrice'))
        this.setState({
            total_amount: totalPrice
        })
        const getTotal = window.localStorage.getItem('getTotal')
        const quantity = window.localStorage.getItem('Quantity')

        productCollect.map(function (productlist) {
            total_price += +parseFloat(productlist.price);
            single_qty =(productlist.qty);
            console.log('price 39', single_qty);
        })

        this.setState({

            productListCount: productCollect.length,
            single_item_qty:single_qty

        })
        console.log('productlist',productCollect)


    }



    increment() {

        if (this.state.count < this.state.product.quantity) {
            this.setState({
                count: this.state.count + 1
            })
            // console.log(this.state.count)
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
            // console.log(this.state.count)
        }
    }

    /**********************
	*product add in cart box 
	***********************/
    cartAdd(item) {

        let total_price = 0

        let productlist = JSON.parse(localStorage.getItem('myProduct')) || []
        const existingItem = productlist.find(({ id }) => id === item.id);

        // let filteredDataSource = productlist.filter((item) => {
        //     if (item.id === existingItem) {
        //         alert('new item')
        //         // item.id = 12345;
        //     } else {
        //         // alert('hey there')
                
        //         // item.qty = item.quantity - this.state.count;
        //         item.qty = item.qty+ this.state.count
        //         item.efrana=15
        //         console.log('after sub', item.qty);
        //         this.setState({
        //             total_qty: item.qty,
        //         })
        //         console.log('total',this.state.total_qty)
        //     }

        //     return item;
        // });

        if (this.state.count > 0) {
            console.log('100', item.id);
            if (existingItem) {
                alert('hi')
                let totalBuyQty = 0
                total_price = (item.price * this.state.count) + this.state.total_amount
                console.log('107', ((item.price * this.state.count) + (this.state.total_amount)));
                // console.log('existing qty',this.state.single_item_qty)
                existingItem.qty = existingItem.quantity - this.state.count;
                // existingItem.buyqty = (existingItem.quantity-existingItem.qty) 
                existingItem.buyqty = existingItem.buyqty + this.state.count
                existingItem.buyprice= existingItem.buyqty*existingItem.price+this.state.total_amount
                // item.qty = this.state.single_item_qty-this.state.count
                console.log('139',this.state.buy_qty_hold)
                
                this.setState({
                    total_amount: total_price
                })

                localStorage.setItem('Quantity', this.state.count)
                localStorage.setItem('buy_qty_hold', this.state.buy_qty_hold)
                localStorage.setItem('totalPrice', total_price)
                localStorage.setItem('getTotal', this.state.total_amount)
                localStorage.setItem('myProduct', JSON.stringify(productlist))
            } else {

                productlist.push(item)
                item.qty = item.quantity - this.state.count;
                item.buyqty = item.quantity-item.qty
                item.buyprice= item.buyqty*item.price
                console.log('totalqty',item.qty)
                total_price = (item.price * this.state.count) + this.state.total_amount
                this.setState({
                    productListCount: productlist.length,
                    total_amount: total_price,
                    count: 0,
                    total_qty:item.qty
                })
                console.log('totalqty',this.state.total_qty)

                localStorage.setItem('Quantity', this.state.count)
                localStorage.setItem('totalPrice', total_price)
                localStorage.setItem('myProduct', JSON.stringify(productlist))

            }
        }
        else {
            this.setState({
                modal: 'emptyValue'
            })
        }
        

    }

    /* Close modal method start */
    closeModal() {
        this.setState({
            modal: ''
        })
        this.props.history.push('/single-product/:id');
    }
    /* Close modal method end */

    render() {

        let { product, productListCount, total_amount } = this.state

        return (
            <div>
                <Breadcrumb pageName="Single Product" />
                <Cartcounter productListCount={productListCount} total_amount={total_amount} />


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
                                            <a href="#" class="btn" onClick={() => this.cartAdd(this.state.product)}>Add to cart</a>

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