import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'

class Wishlist extends Component {
    state = {}
    render() {
        return (
            <div>
                <Breadcrumb />
                <div className="main-content-wrapper">
                    <div className="wishlist-wrapper ptb--60">
                        <div className="container">

                            {/* <!-- Wishlist Area Start --> */}
                            <div className="row">
                                <div className="col-12">
                                    <form action="#" className="form form--cart">
                                        <div className="cart-table table-content table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Images</th>
                                                        <th>Product</th>
                                                        <th>Unit Price</th>
                                                        <th>Available</th>
                                                        <th>Add to Cart</th>
                                                        <th>remove</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><a href="single-product.html"><img src="assets/img/fashion/product/1.jpg" alt="product" /></a></td>
                                                        <td className="cart-product-price"><h3><a href="#">Red Bag</a></h3></td>
                                                        <td><strong>$16.00</strong></td>
                                                        <td>
                                                            <span className="available">Yes</span>
                                                        </td>
                                                        <td><a href="cart.html" className="btn add-to-cart"><i className="fa fa-shopping-cart"></i></a></td>
                                                        <td><a href="#"><i className="fa fa-trash remove"></i></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="single-product.html"><img src="assets/img/fashion/product/11.jpg" alt="product" /></a></td>
                                                        <td className="cart-product-price"><h3><a href="#">Blue Shoes</a></h3></td>
                                                        <td><strong>$16.00</strong></td>
                                                        <td>
                                                            <span className="out-stock">No</span>
                                                        </td>
                                                        <td><a href="cart.html" className="btn add-to-cart"><i className="fa fa-shopping-cart"></i></a></td>
                                                        <td><a href="#"><i className="fa fa-trash remove"></i></a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- Wishlist Area End --> */}
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Wishlist;