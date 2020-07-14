import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'

class Cart extends Component {
    state = {}
    render() {
        return (
            <div>
                <Breadcrumb pageName="Cart" />
                <div className="main-content-wrapper">
                    <div className="cart-area ptb--60">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12">
                                            {/* <!-- Cart Area Start --> */}
                                            <form action="#" className="form form--cart">
                                                <div className="cart-table table-content table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Images</th>
                                                                <th>Product</th>
                                                                <th>Unit Price</th>
                                                                <th>Quantity</th>
                                                                <th>Total</th>
                                                                <th>remove</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <a href="single-product.html"><img src="assets/img/fashion/product/1.jpg" alt="product" /></a>
                                                                </td>
                                                                <td className="cart-product-price"><h3><a href="#">Red Bag</a></h3></td>
                                                                <td><strong>$16.00</strong></td>
                                                                <td>
                                                                    <div className="quantity">
                                                                        <input type="number" className="quantity-input" name="qty" id="qty1" value="1" />
                                                                        <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div><div className="inc qtybutton"><i className="fa fa-angle-up"></i></div></div>
                                                                </td>
                                                                <td><strong>$16.00</strong></td>
                                                                <td><a href="#"><i className="fa fa-trash remove"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <a href="single-product.html"><img src="assets/img/fashion/product/12.jpg" alt="product"/></a>
                                                        </td>
                                                                    <td className="cart-product-price"><h3><a href="#">Blue shoe</a></h3></td>
                                                                    <td><strong>$16.00</strong></td>
                                                                    <td>
                                                                        <div className="quantity">
                                                                            <input type="number" className="quantity-input" name="qty" id="qty2" value="1" />
                                                                            <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div><div className="inc qtybutton"><i className="fa fa-angle-up"></i></div></div>
                                                                    </td>
                                                                    <td><strong>$16.00</strong></td>
                                                                    <td><a href="#"><i className="fa fa-trash remove"></i></a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                                {/* <!-- Cart Area End -->   */}
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
 
export default Cart;