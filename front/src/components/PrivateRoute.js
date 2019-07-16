import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from '../lib/auth'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? (
        fakeAuth.canAccess(props.location.pathname) === true
          ? (
            <Component {...props} />
          )
          : (
            <Redirect to={{
              pathname: '/',
              state: { from: props.location }
             }} />         
          )       
      )
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)
export { PrivateRoute };
