import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'

class Checkout extends Component {
    state = {}
    render() {
        return (
            <div>
                <Breadcrumb pageName="Checkout" />
                <div className="main-content-wrapper">
                    <div className="checkout-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">

                                    {/* <!-- Checkout Area Start --> */}
                                    <div className="checkout-area ptb--60">
                                        <div className="row">
                                            <div className="col-lg-7">
                                                <div className="custom-title">
                                                    <h2>Billing Details</h2>
                                                </div>
                                                <div className="checkout-form">
                                                    <form action="#" className="form" _lpchecked="1">
                                                        <div className="form-row mb--30">
                                                            <div className="zeref-form-group col-md-6">
                                                                <input type="text" name="fname" className="zeref-input-form" placeholder="First Name *"  />
                                                            </div>
                                                            <div className="zeref-form-group col-md-6">
                                                                <input type="text" name="lname" className="zeref-input-form" placeholder="Last Name *" />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="zeref-form-group col-md-12">
                                                                <input type="text" name="company" className="zeref-input-form" placeholder="Company" />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="zeref-form-group col-md-6">
                                                                <input type="text" name="city" className="zeref-input-form" placeholder="City *" />
                                                            </div>
                                                            <div className="zeref-form-group col-md-6">
                                                                <input type="email" name="bill_email" id="bill_email" className="zeref-input-form" placeholder="Email Address *" />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="zeref-form-group col-md-6">
                                                                <input type="text" name="zip" id="zip" className="zeref-input-form" placeholder="Zip Code *" />
                                                            </div>
                                                            <div className="zeref-form-group col-md-6">
                                                                <select className="country_select" style={{display:"none"}}>
                                                                    <option value="">---Please Select---</option>
                                                                    <option value="Bangladesh">Bangladesh</option>
                                                                    <option value="Pakistan">Pakistan</option>
                                                                    <option value="Germany">Germany</option>
                                                                    <option value="Argentina">Argentina</option>
                                                                    <option value="Belgium">Belgium</option>
                                                                    <option value="Brazil">Brazil</option>
                                                                    <option value="India">India</option>
                                                                    <option value="Saudi">Saudi arabia</option>
                                                                </select><div className="nice-select country_select" tabindex="0"><span className="current">---Please Select---</span><ul className="list"><li data-value="" className="option selected">---Please Select---</li><li data-value="Bangladesh" className="option">Bangladesh</li><li data-value="Pakistan" className="option">Pakistan</li><li data-value="Germany" className="option">Germany</li><li data-value="Argentina" className="option">Argentina</li><li data-value="Belgium" className="option">Belgium</li><li data-value="Brazil" className="option">Brazil</li><li data-value="India" className="option">India</li><li data-value="Saudi" className="option">Saudi arabia</li></ul></div>
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="zeref-form-group col-12">
                                                                <input type="text" name="streetAddress" className="zeref-input-form" placeholder="Address" />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="zeref-form-group col-12">
                                                                <input type="text" name="apartment" className="zeref-input-form" placeholder="Apartment, suite, unit etc. (optional)" />
                                                            </div>
                                                        </div>
                                                        <div className="form-row mb--30">
                                                            <div className="zeref-form-group col-md-6">
                                                                <input type="text" name="phone" className="zeref-input-form" placeholder="Telephone" />
                                                            </div>
                                                            <div className="zeref-form-group col-md-6">
                                                                <input type="text" name="fax" className="zeref-input-form" placeholder="Fax" />
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="zeref-form-group col-12">
                                                                <textarea className="zeref-input-form zeref-input-form--textarea" id="orderNotes" name="orderNotes" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 mt-md--30">
                                                <div className="custom-title">
                                                    <h2>Your Order</h2>
                                                </div>
                                                <div className="order-details mb--30">
                                                    <table className="order-table">
                                                        <thead>
                                                            <tr>
                                                                <th>Product</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Luxury Bag</td>
                                                                <td>$38.00</td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr className="cart-subtotal">
                                                                <td>Cart Subtotal</td>
                                                                <td>$56.00</td>
                                                            </tr>
                                                            <tr className="cart-subtotal">
                                                                <td>Shipping</td>
                                                                <td>$00.00</td>
                                                            </tr>
                                                            <tr className="order-total">
                                                                <td>Order Total</td>
                                                                <td>$56.00</td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                                <div className="checkout-payment">
                                                    <form action="#" className="form">
                                                        <div className="form-row">
                                                            <div className="zeref-form-group col-12">
                                                                <div className="custom-radio custom-radio--2">
                                                                    <input type="radio" name="paymentMethods" id="checkpayment" className="zeref-radio-input" />
                                                                    <label for="checkpayment" className="zeref-radio-label"> <span></span> Direct Bank Transfer</label>
                                                                </div>
                                                                <p className="zeref-payment-info">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="zeref-form-group col-12">
                                                                <div className="custom-radio">
                                                                    <input type="radio" name="paymentMethods" id="cashdelivery" className="zeref-radio-input" />
                                                                    <label for="cashdelivery" className="zeref-radio-label"> <span></span> Cheque Payment</label>
                                                                </div>
                                                                <p className="zeref-payment-info">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="zeref-form-group col-12">
                                                                <div className="custom-radio custom-radio--2">
                                                                    <input type="radio" name="paymentMethods" id="paypal" className="zeref-radio-input" />
                                                                    <label for="paypal" className="zeref-radio-label"> <span></span> PayPal Express Checkout</label>
                                                                </div>
                                                                <p className="zeref-payment-info">Pay via PayPal. You can pay with your credit card if you don’t have a PayPal account.</p>
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="zeref-form-group col-12">
                                                                <button type="submit" className="btn btn-style-3 btn--fullwidth">Place Order</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Checkout Area End --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;