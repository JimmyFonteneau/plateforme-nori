import React, { Component } from 'react';
import { withRouter, Route, Redirect } from "react-router-dom";
import { fakeAuth } from '../lib/auth';

const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
      <p>
       <button onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    ) : (
        <button onClick={() => {           
            history.push('/login')
          }}>Login</button>
    )
  ))

export { AuthButton };