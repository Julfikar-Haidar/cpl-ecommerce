import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Cartcounter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        show: false
         }

    }

    showHide=() => {
        const{show} = this.state
        alert('hi')
        this.setState({
            show: !show
        })
    }

    render() { 
        return (
            <React.Fragment>
                <div className="cart-counter shadow" style={{position:'fixed', right:0,  textAlign:'center', backgroundColor:'#7f7f7f',}}>
                    <div className="cart-counter-inner" style={{padding: 10}}>
                        <i className="fa fa-shopping-bag" style={{color: '#f5a623'}} aria-hidden="true"></i>
                        <p onClick={ () => this.showHide()} className="cart-item" style={{marginBottom:0,color: '#f5a623',
                            fontWeight: 700}}>Items-{this.props.productListCount}</p>
                            <a href="">{this.state.show && <Box/>}</a>
                            
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





class Box extends Component {
    state = {  }
    render() { 
        return (  

            <div>lorem ipsum lorem </div> 
        );
    }
}
 
