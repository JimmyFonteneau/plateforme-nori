import React, { Component } from 'react';
import { withRouter, Route, Redirect } from "react-router-dom";
import { Auth } from '../lib/auth';

const AuthButton = withRouter(({ history }) => (
    Auth.isAuthenticated ? (
      <p>
       <button onClick={() => {
          Auth.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    ) : (
        <button onClick={() => {           
            history.push('/login')
          }}>Login</button>
    )
  ))

export { AuthButton };