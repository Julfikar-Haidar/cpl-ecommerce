import React, { Component } from 'react'
import axios from 'axios'
class Shop_list_grid extends Component {

    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        axios.get('https://nodejs-backend-apis.herokuapp.com/api/product')
            .then(response => {
                this.setState({ products: response.data.data });
                console.log(response.data.data)
            })
            .catch(function (error) {
                console.log (error);
            })
    }
    render() {
        return (
            <div>
                {this.state.products.map((item,index)=>
                <div className="product-grid7 mb--30">
                    <div className="product-image7">
                        <a href="#">
                            <img className="pic-1" alt="product image" src="assets/img/fashion/product/7.jpg" />
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
                        <h3 className="title"><a href="#">{item.name}</a></h3>
                        <ul className="rating">
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                            <li className="fa fa-star"></li>
                        </ul>
                        <div className="price"> {item.price}TK
                            <span>$20.00</span>
                        </div>
                    </div>
                     
                </div>
                )}
            </div>

        )
    }

}
export default Shop_list_grid