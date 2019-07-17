import React, { Component } from 'react';
import { Auth } from '../lib/auth';
import { Redirect } from "react-router-dom";
import { Form, FormCheck } from 'react-bootstrap';
import { post } from '../lib/apiCalls';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = async () => {
    const { email, password } = this.state;
    const jwt = await post('/login', {email, password});
    if (jwt) {
      Auth.authenticate(jwt, () => {
        this.setState(() => ({
          redirectToReferrer: true
        }));
      });
    }    
  }

  handleChange = (event) => {  
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // handlePassword = (password) => {
  //   check(password);
  //   if (ok) {
  //     this.setState({
  //       [name]: value
  //     });
  //   } else {

  //   }
  // }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <Form>
          <Form.Group controlId="formGroupEmail">
           {/* Passer ces 3 champs en composant */}
           <Form.Label>Email</Form.Label>
           <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Enter email" />
           {/* {this.state.passwordError ? <span name="password-error">{this.state.passwordError}</span>}             */}
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Password" />
          </Form.Group>
        </Form>       
        <button onClick={this.login}>Connectez-vous</button>
      </div>
    )
  }
}

export { Login };