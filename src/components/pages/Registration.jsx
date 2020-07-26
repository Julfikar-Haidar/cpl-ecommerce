import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'
import axios from 'axios';
import Modal from 'react-bootstrap4-modal';
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
    val === null && (valid = false);
  });

  return valid;
};

class Registration extends Component {

  error_msg = {
    fontSize: 12,
    color: 'red'
  }
  constructor(props) {
    super(props);


    this.state = {
      username: null,
      password: null,
      email: null,
      firstName: null,
      lastName: null,
      modal: '',
      form_empty: '',

      errors: {
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
      }
    }
  }

  // validation part start
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'username':
        errors.username =
          value.length < 5
            ? 'Username must be at least 5 characters long!'
            : '';
        break;
      
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
      
      case 'firstName':
        errors.firstName =
          value.length < 5
            ? 'First Name must be at least 5 characters long!'
            : '';
        break;
      
      case 'lastName':
        errors.lastName =
          value.length < 5
            ? 'Last Name must be at least 5 characters long!'
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
      console.info('Valid Form successfully')
      console.info(this.state)
      const obj = {
        username: this.state.username,
        firstName: this.state.firstName,
        lasttName: this.state.lasttName,
        email: this.state.email,
        password: this.state.password
      };

      axios.post('https://nodejs-backend-apis.herokuapp.com/api/register', obj)
        .then(res => console.log(res.data));
      
      this.setState({
        modal: 'success'
      })

    } else {
      console.error('Invalid Form')
    
      // alert("Please fill up  the field.")
      this.setState({
        form_empty: "Invalid form please input value"
      })
      
    }
  }



  closeModal() {
    this.setState({
      modal: ''
    })
    this.props.history.push('/login');
  }

  render() {
    const { errors ,form_empty} = this.state;

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
                    <p className="text-center" style={this.error_msg}>{form_empty}</p>
                    <form className="form" onSubmit={this.handleSubmit}>
                      <div className="zeref-form-group row align-items-center">
                        <div className="col-md-12 col-lg-12 col-12">
                          <input type="text" name="username" className="zeref-input-form" placeholder="Username"

                            onChange={this.handleChange}
                          />
                          {errors.username.length > 0 &&
                            <span className='error' style={this.error_msg}>{errors.username}</span>}
                        </div>
                      </div>
                      <div className="zeref-form-group row align-items-center">
                        <div className="col-md-12 col-lg-12 col-12">
                          <input type="text" name="firstName" className="zeref-input-form" placeholder="FirstName"

                            onChange={this.handleChange}
                          />
                          {errors.firstName.length > 0 &&
                            <span className='error error_msg' style={this.error_msg}>{errors.firstName}</span>}
                        </div>
                      </div>
                      <div className="zeref-form-group row align-items-center">
                        <div className="col-md-12 col-lg-12 col-12">
                          <input type="text" name="lastName" className="zeref-input-form" placeholder="LastName"

                            onChange={this.handleChange}
                          />
                          {errors.lastName.length > 0 &&
                            <span className='error error_msg' style={this.error_msg}>{errors.lastName}</span>}
                        </div>
                      </div>
                      <div className="zeref-form-group row align-items-center">
                        <div className="col-md-12 col-lg-12 col-12">
                          <input type="text" name="email" id="login_email" className="zeref-input-form" placeholder="Email*"

                            onChange={this.handleChange}
                          />
                          {errors.email.length > 0 &&
                            <span className='error error_msg' style={this.error_msg}>{errors.email} </span>}
                        </div>
                      </div>
                      <div className="zeref-form-group row align-items-center">
                        <div className="col-md-12 col-lg-12 col-12">
                          <input type="password" name="password" id="login_password" className="zeref-input-form" placeholder="Password*"

                            onChange={this.handleChange}
                          />
                          {/* <button className="password-btn" type="button">Show</button> */}
                          {errors.password.length > 0 &&
                            <span className='error error_msg' style={this.error_msg}>{errors.password}</span>}
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
                {/* Success Modal Start*/}
                <Modal className="register-success-modal" visible={this.state.modal === 'success' ? true : false}>
                  <div className="alert alert-success user-success-message">
                    <strong>Registered Successfully! Please Login</strong>
                    <button type="button" className="close success-close" data-dismiss="modal" aria-label="Close" onClick={() => this.closeModal()}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                </Modal>
                {/* Success Modal End*/}
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