import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'

class Registration extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Breadcrumb pageName="Register" />
                {/* Registratin start */}
                <div className="main-content-wrapper">
                    <div className="page-inner section-padding">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-10">
                                    <div className="form-box">
                                        <h1 className="text-center">Register</h1>
                                        <p className="text-center">Please sign up using account detail bellow.</p>
                                        <form className="form" action="#">
                                            <div className="zeref-form-group row align-items-center">
                                                <div className="col-md-12 col-lg-12 col-12">
                                                    <input type="text" name="username" className="zeref-input-form" placeholder="Username"
                                                    />
                                                </div>
                                            </div>
                                            <div className="zeref-form-group row align-items-center">
                                                <div className="col-md-12 col-lg-12 col-12">
                                                    <input type="email" name="login_email" id="login_email" className="zeref-input-form" placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="zeref-form-group row align-items-center">
                                                <div className="col-md-12 col-lg-12 col-12">
                                                    <input type="password" name="login_password" id="login_password" className="zeref-input-form" placeholder="Password"
                                                    />
                                                    <button className="password-btn" type="button">Show</button>
                                                </div>
                                            </div>
                                            <div className="zeref-form-group row align-items-center">
                                                <div className="col-lg-12 col-12 text-center">
                                                    <button type="submit" className="btn btn--large btn-style-3">Register</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* Registration End */}
            </div>
         );
    }
}
 
export default Registration;