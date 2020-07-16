import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb';
import { Link } from 'react-router-dom';
import axios from 'axios';

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = ({ errors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(errors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === '' && (valid = false);
    });

    return valid;
};

class Login extends Component {

    error_msg = {
        fontSize: 12,
        color: 'red'
    }

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            form_empty: '',
            errors: {
                email: '',
                password: ''

            }

        }
    }

    // validation part start
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {

            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;

            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;

            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {

        event.preventDefault();

        if (validateForm(this.state)) {
            console.info('Login successfully')
            console.info(this.state)
            const obj = {
                email: this.state.email,
                password: this.state.password
            };

            axios
                .post(
                    "https://nodejs-backend-apis.herokuapp.com/api/login",
                    {
                        obj
                    },
                    { withCredentials: true }
                )
                .then(response => {
                    if (response.data.logged_in) {
                        this.props.handleSuccessfulAuth(response.data);
                    }
                })
                .catch(error => {
                    console.log("login error", error);
                });


        } else {
            console.error('Invalid Form')
            this.setState({
                form_empty: "Invalid form please input value"
            })

        }
    }

    render() {
        const { errors , form_empty } = this.state;

        return (
            <div>
                <Breadcrumb pageName="Login" />
                {/* Main content wrapper start */}

                <div className="main-content-wrapper">
                    <div className="page-inner section-padding">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-10">
                                    <div className="form-box">
                                        <h1 className="text-center">Login</h1>
                                        <p className="text-center">Please login using account detail bellow.</p>
                                        <p className="text-center" style={this.error_msg}>{form_empty}</p>
                                        <form className="form" action="#" onSubmit={this.handleSubmit}>
                                            <div className="zeref-form-group row align-items-center">
                                                <div className="col-md-12 col-lg-12 col-12">
                                                    <input type="email" name="email" id="login_email" className="zeref-input-form" placeholder="Email"
                                                        onChange={this.handleChange} />
                                                    {errors.email.length > 0 &&
                                                        <span className='error' style={this.error_msg}>{errors.email}</span>}
                                                </div>
                                            </div>
                                            <div className="zeref-form-group row align-items-center">
                                                <div className="col-md-12 col-lg-12 col-12">
                                                    <input type="password" name="password" id="login_password" className="zeref-input-form" placeholder="Password"
                                                        onChange={this.handleChange} />
                                                    {errors.password.length > 0 &&
                                                        <span className='error' style={this.error_msg}>{errors.password}</span>}
                                                    <button className="password-btn" type="button">Show</button>
                                                </div>
                                            </div>
                                            <div className="zeref-form-group row align-items-center">
                                                <div className="col-lg-12 col-12 text-center">
                                                    <a href="#" className="forgot-pass">Forgot your password?</a>
                                                    <button type="submit" className="btn btn--large btn-style-3">Sign in</button>
                                                </div>
                                            </div>
                                        </form>
                                        <Link className="create-account-link" to="/register">New Here? Create an account</Link>
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