import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb';
import {Link} from 'react-router-dom';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartProduct: [],
            per_productPrice:0

        }

    }

    componentDidMount() {
        // console.log('11 line print');
        const productCollect = JSON.parse(window.localStorage.getItem('myProduct'))

        let per_productPrice = window.localStorage.getItem('per_productPrice')
        let quantity = window.localStorage.getItem('Quantity')
        console.log('20', per_productPrice,quantity);
        this.setState({
            cartProduct: productCollect,
            per_productPrice:per_productPrice

        })

    }
   
    handleDelete = productId => {
        console.log("Button Clicked!", productId);
        // console.log(this.state.cartProduct);
        const cartProduct = this.state.cartProduct.filter(c=> c.id !== productId);
        
        // const cartIdTest = this.state.cartProduct.filter(c=> c.id);
        // const pIdTest = productId;
        // console.log('proId',pIdTest);
        // console.log('id testing',cartIdTest);

        console.log('test',cartProduct);

        this.setState({ cartProduct: cartProduct });

        localStorage.setItem('myProduct', JSON.stringify(cartProduct))

    };

    render() {

        
        const { cartProduct ,per_productPrice} = this.state
        
        if (cartProduct != null) {
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
                                                                {cartProduct.map((product_item, index) => (
                                                                    
                                                                    <tr>
                                                                        <td>
                                                                            <a href="single-product.html"><img src="assets/img/fashion/product/1.jpg" alt="product" /></a>
                                                                        </td>
                                                                        <td className="cart-product-price"><h3><a href="#">{product_item.name}</a></h3></td>
                                                                        <td><strong>${product_item.price}</strong></td>
                                                                        <td>
                                                                            <div className="quantity">
                                                                                <input type="number" className="quantity-input" name="qty" id="qty1" value={product_item.buyqty}/>
                                                                                <div className="dec qtybutton">
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </div>
                                                                                <div className="inc qtybutton">
                                                                                    <i className="fa fa-angle-up"></i>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td><strong>{product_item.buyprice}</strong></td>
                                                                        <td><button  onClick={()=>this.handleDelete(product_item.id)}>
                                                                            <i className="fa fa-trash remove"></i>
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
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
        } else {
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
                                                                   
                                                                   <td colspan="6" className="text-danger">No Product in cart</td> 
                                                                    
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
            )
        }
    }
}

export default Cart;