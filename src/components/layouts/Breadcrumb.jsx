import React, { Component } from 'react';

class Breadcumb extends Component {
    state = {  }
    render() { 
        return (
            <div>
                {/* Breadcumb area Start */}
                <div class="breadcumb-area bg--black ptb--100">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <ul class="breadcumb">
                                    <li class="zeref-breadcumb"><a class="zeref-breadcumb-link" href="index.html">Home</a></li>
                                    <li class="zeref-breadcumb"><a class="zeref-breadcumb-link current" href="login.html">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcumb area End */}
            </div>
        );
    }
}
 
export default Breadcumb;