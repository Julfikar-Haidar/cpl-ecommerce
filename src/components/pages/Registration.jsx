import React, { Component } from 'react';
import Breadcrumb from '../layouts/Breadcrumb'
import axios from 'axios';
import Modal from 'react-bootstrap4-modal';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          name: '',
          email: '',
          password: '',
          modal:''
          
        }
      }
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })  
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })  
      }
    
    
      onSubmit(e) {
        e.preventDefault();
        const obj = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        };
        axios.post('https://jsonplaceholder.typicode.com/posts', obj)
            .then(res => {
              console.log(res.data);
              this.setState({
                modal:'success'
              })
              
            }).catch(error => { 
              console.log('request failed', error); 
          });

          this.setState({
          name: '',
          email: '',
          password: ''
        })
        
      }
      
    closeModal(){
      this.setState({
          modal:''
      })
      this.props.history.push('/login');
    }
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
                                        <form className="form" action="#" onSubmit={this.onSubmit}>
                                            <div className="zeref-form-group row align-items-center">
                                                <div className="col-md-12 col-lg-12 col-12">
                                                    <input type="text" name="username" className="zeref-input-form" placeholder="Username"
                                                    value={this.state.name}
                                                    onChange={this.onChangeName}
                                                    />
                                                </div>
                                            </div>
                                            <div className="zeref-form-group row align-items-center">
                                                <div className="col-md-12 col-lg-12 col-12">
                                                    <input type="email" name="login_email" id="login_email" className="zeref-input-form" placeholder="Email"
                                                    value={this.state.email}
                                                    onChange={this.onChangeEmail}
                                                    />
                                                </div>
                                            </div>
                                            <div className="zeref-form-group row align-items-center">
                                                <div className="col-md-12 col-lg-12 col-12">
                                                    <input type="password" name="login_password" id="login_password" className="zeref-input-form" placeholder="Password"
                                                    value={this.state.password}
                                                    onChange={this.onChangePassword}
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
                                {/* Success Modal Start*/}
                                <Modal className="register-success-modal" visible={ this.state.modal === 'success' ? true : false}>
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