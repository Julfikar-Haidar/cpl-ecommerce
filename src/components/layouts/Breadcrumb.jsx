import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function Breadcrumb({pageName,subCategory}){
    return (
        <div>
            {/* Breadcumb area Start */}
            <div className="breadcumb-area bg--black ptb--100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="breadcumb">
                                <li className="zeref-breadcumb"><Link className="zeref-breadcumb-link" to="/">Home</Link></li> 
                                <li className="zeref-breadcumb"><Link className="zeref-breadcumb-link current" to="./login">{pageName}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcumb area End */}
        </div>
    );
   
}
 
export default Breadcrumb;