import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { AuthButton } from './AuthButton';

class Navigation extends Component {
  render() {  
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              onClick={() => {
                this.props.history.push('/');
              }}
            />
            {' Nori'}
          </Navbar.Brand>
          <Navbar.Text className="justify-content-end">
            <Link to="/public">Public Page</Link>
          </Navbar.Text>
          <Navbar.Text className="justify-content-end">
            <Link to="/protected">Protected Page</Link>
          </Navbar.Text>
          <Navbar.Text className="justify-content-end">
            <AuthButton/>
          </Navbar.Text>
        </Navbar>
      </>
    )
  }
}

export default withRouter(Navigation)