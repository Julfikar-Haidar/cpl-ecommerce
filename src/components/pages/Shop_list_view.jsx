import React, {Component} from 'react';
import Breadcrumb from '../layouts/Breadcrumb';
import Shop_list_grid from '../layouts/Shop_list_grid';
import ShopSidebar from '../layouts/Shop-sidebar';
import {Link} from 'react-router-dom';
import Cartcounter from '../layouts/Cart-counter'
class Shop_list_view extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false,
            products: [],
            productListCount: 0,
            total_amount: 0
        }
    }

    componentDidMount() {
        let total_price = 0
        fetch('https://nodejs-backend-apis.herokuapp.com/api/product')
            .then(res => res.json())
            .then(jul => {
                this.setState({
                    isLoaded: true,
                    items: jul.data
                })

            })

            const productCollect = JSON.parse(window.localStorage.getItem('myProduct')) || []
            console.log('test', productCollect);
            console.log('check length', productCollect.length);
           
            productCollect.map(function (productlist) {
                total_price += +parseFloat(productlist.price);
                console.log('price 39',total_price);
            })
    
            this.setState({
                productListCount: productCollect.length,
                total_amount: total_price
            })
    }

    /**********************
	*product add in cart box 
	***********************/
    cartAdd=(product)=>{
        let total_price = 0 
        let productlist =JSON.parse(localStorage.getItem('myProduct')) || []
        productlist.push(product)

        productlist.map(function (productlist) {
            total_price += +parseFloat(productlist.price);
            console.log('price 39',total_price);
        })

        this.setState({
            productListCount: productlist.length,
            total_amount: total_price
        })
      
         console.log('data conyhbt',this.state.productListCount)
         console.log(' product price',this.state.total_amount)
        localStorage.setItem('myProduct', JSON.stringify(productlist))
    }
    handleDelete = () => {
        console.log('Event handler called');
    };


    render() {
        let { products,productListCount,total_amount} = this.state
        var {isLoaded, items} = this.state;
        const imageName = '/assets/img/fashion/product/1.jpg';
       
        return (
            
            <div>
            <Cartcounter productListCount={productListCount} onClick={this.handleDelete} total_amount={total_amount}/>
            
            <Breadcrumb pageName="Product List"/>
                <div className="main-content-wrapper">
                    <div className="shop-area section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 order-lg-1 order-2">
                                    <ShopSidebar/>
                                </div>
                                <div className="col-lg-9 order-lg-2 order-1">
                                    <div
                                        className="shop-toolbar d-flex flex-md-row flex-column justify-content-between align-items-md-center">
                                        <div className="zeref-shop-grid-list">
                                            <ul className="nav">
                                                <li>
                                                    <a data-toggle="tab" href="#grid"><i className="fa fa-th"></i></a>
                                                </li>
                                                <li>
                                                    <a className="active" data-toggle="tab" href="#list">
                                                    <i className="fa fa-list"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="zeref-short">
                                            <label>Short By:</label>
                                            <select className="short-select" style={{display: "none"}}>
                                                <option value="1">Position</option>
                                                <option value="2">Name, A to Z</option>
                                                <option value="3">Name, Z to A</option>
                                                <option value="4">Price, low to high</option>
                                                <option value="5">Price, high to low</option>
                                            </select>
                                            <div className="nice-select short-select" tabindex="0"><span
                                                className="current">Position</span>
                                                <ul className="list">
                                                    <li data-value="1" className="option selected">Position</li>
                                                    <li data-value="2" className="option">Name, A to Z</li>
                                                    <li data-value="3" className="option">Name, Z to A</li>
                                                    <li data-value="4" className="option">Price, low to high</li>
                                                    <li data-value="5" className="option">Price, high to low</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Shop Layout Start --> */}
                                    <div className="main-shop-wrapper">
                                        <div className="tab-content" id="myTabContent-2">
                                            <div className="tab-pane" id="grid">
                                                <div className="product-grid-view">
                                                    <Shop_list_grid/>
                                                </div>
                                            </div>
                                            <div className="tab-pane show active" id="list">
                                                <div className="product-list-view">
                                                    {/* paste here start */}
                                                    <ul>
                                                        {items.map((product, index) => {
                                                            return (
                                                                <div>
                                                                    <div
                                                                        className="product-box product-box--list variable-product"
                                                                        key="index">
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                <div className="zeref-box-image">
                                                                                    <img
                                                                                        src={product.imageUrl}
                                                                                        alt="product image"
                                                                                        className="primary_image"/>
                                                                                    <img
                                                                                        src="assets/img/fashion/product/4.jpg"
                                                                                        alt="product image"
                                                                                        className="secondary_image"/>
                                                                                    <a href="#" data-toggle="modal"
                                                                                       data-target="#productModal"
                                                                                       className="quick-view"> <i
                                                                                        className="fa fa-eye"></i> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-8">
                                                                                <div className="zeref-box-desc">
                                                                                    {/* <a href="/single-product {index}" className="zeref-box-title">{value.name}</a> */}
                                                                                    <Link
                                                                                        to={"/single-product/" + product.id}
                                                                                        className="zeref-box-title">{product.name}</Link>
                                                                                    <p className="zeref-box-price">
                                                                                        <span
                                                                                            className="sale-price">{product.price}TK</span>
                                                                                        <span className="regular-price">{product.price}</span>
                                                                                    </p>
                                                                                    <p className="zeref-box-descript">{product.description}</p>
                                                                                        <a href="#" className="btn add-to-cart btn-style-2" onClick={()=>this.cartAdd(product)}><i
                                                                                        className="fa fa-shopping-cart"></i></a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
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