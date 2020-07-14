import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Breadcrumb pageName="Login" />
                {/* Main content wrapper start */}

                <div class="main-content-wrapper">
                    <div class="page-inner section-padding">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6 col-md-10">
                                    <div class="form-box">
                                        <h1 class="text-center">Login</h1>
                                        <p class="text-center">Please login using account detail bellow.</p>
                                        <form class="form" action="#">
                                            <div class="zeref-form-group row align-items-center">
                                                <div class="col-md-12 col-lg-12 col-12">
                                                    <input type="email" name="login_email" id="login_email" class="zeref-input-form" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div class="zeref-form-group row align-items-center">
                                                <div class="col-md-12 col-lg-12 col-12">
                                                    <input type="password" name="login_password" id="login_password" class="zeref-input-form" placeholder="Password" />
                                                    <button class="password-btn" type="button">Show</button>
                                                </div>
                                            </div>
                                            <div class="zeref-form-group row align-items-center">
                                                <div class="col-lg-12 col-12 text-center">
                                                    <a href="#" class="forgot-pass">Forgot your password?</a>
                                                    <button type="submit" class="btn btn--large btn-style-3">Sign in</button>
                                                </div>
                                            </div>
                                        </form>
                                        <a class="create-account-link" href="register.html">New Here? Create an account</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content wrapper end */}
            </div>

         );
    }
}
 
export default Login;