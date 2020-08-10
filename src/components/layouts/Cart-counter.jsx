import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CartCounter.css'

class Cartcounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }

    }

    showHide = () => {
        const { show } = this.state
        alert('hi')
        this.setState({
            show: !show
        })
    }

    render() {
        return (
            <React.Fragment>
                <div data-toggle="modal" data-target="#exampleModal" className="cart-counter shadow" style={{ position: 'fixed', right: 0, textAlign: 'center', backgroundColor: '#7f7f7f', }}>
                    <div className="cart-counter-inner" style={{ padding: 10 }}>
                        <i className="fa fa-shopping-bag" style={{ color: '#f5a623' }} aria-hidden="true"></i>
                        <p className="cart-item" style={{
                            marginBottom: 0, color: '#f5a623',
                            fontWeight: 700
                        }}>Items-{this.props.productListCount}</p>
                        {/* <a href="">{this.state.show && <Box />}</a> */}

                    </div>
                    <div className="cproduct-amount" style={{ backgroundColor: '#fff' }}>
                        <p style={{ marginBottom: 0 }}>$ 2,889</p>
                    </div>
                </div>

                {/* custom modal cart product */}
                <div className="modal left fade" id="exampleModal" tabindex="" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <ul className="dropdown-cart" role="menu">
                                    <li>
                                        <span className="item">
                                            <span className="item-left">
                                                <img src="http://lorempixel.com/50/50/" alt="" />
                                                <span className="item-info">
                                                    <span>Item name</span>
                                                    <span>23$</span>
                                                </span>
                                            </span>
                                            <span className="item-right">
                                                <button className="btn_cus btn-xs btn-danger pull-right">x</button>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="item">
                                            <span className="item-left">
                                                <img src="http://lorempixel.com/50/50/" alt="" />
                                                <span className="item-info">
                                                    <span>Item name</span>
                                                    <span>23$</span>
                                                </span>
                                            </span>
                                            <span className="item-right">
                                                <button className="btn_cus btn-xs btn-danger pull-right">x</button>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="item">
                                            <span className="item-left">
                                                <img src="http://lorempixel.com/50/50/" alt="" />
                                                <span className="item-info">
                                                    <span>Item name</span>
                                                    <span>23$</span>
                                                </span>
                                            </span>
                                            <span className="item-right">
                                                <button className="btn_cus btn-xs btn-danger pull-right">x</button>
                                            </span>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="item">
                                            <span className="item-left">
                                                <img src="http://lorempixel.com/50/50/" alt="" />
                                                <span className="item-info">
                                                    <span>Item name</span>
                                                    <span>23$</span>
                                                </span>
                                            </span>
                                            <span className="item-right">
                                                <button className="btn_cus btn-xs btn-danger pull-right">x</button>
                                            </span>
                                        </span>
                                        </li>
          
            </ul>
        </div>
                                <div className="modal-footer">

                                    <button type="button" className="btn_cus btn-secondary" data-dismiss="modal">View Cart</button>
                                    <button type="button" className="btn_cus btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* custom product cart end */}
            </React.Fragment>

          );
    }
}

export default Cartcounter;





{/* class Box extends Component {
                    state = {}
    render() {
        return (

                <div>lorem ipsum lorem </div>
        );
    }
} */}

