import React, { Component } from 'react';
import { fakeAuth } from '../lib/auth';
import { Redirect } from "react-router-dom";
import { Form } from 'react-bootstrap';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    })
  }

  handleChange = (event) => {  
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

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
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Password" />
          </Form.Group>
        </Form>
        {/* <p>Connectez-vous</p> */}
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export { Login };