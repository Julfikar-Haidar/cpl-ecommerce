import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Cartcounter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        
         }
    }
    render() { 
        return (
            <React.Fragment>
                <div className="cart-counter shadow" style={{position:'fixed', right:0,  textAlign:'center', backgroundColor:'#7f7f7f',}}>
                    <div className="cart-counter-inner" style={{padding: 10}}>
                        <i className="fa fa-shopping-bag" style={{color: '#f5a623'}} aria-hidden="true"></i>
                        <p className="cart-item" style={{marginBottom:0,color: '#f5a623',
                            fontWeight: 700}}>Items-{this.props.productListCount}</p>
                    </div>
                    <div className="cproduct-amount" style={{backgroundColor:'#fff'}}>
        <p style={{marginBottom:0}}>$ 2,889</p>
                    </div>
                </div>
            </React.Fragment>

          );
    }
}
 
export default Cartcounter;