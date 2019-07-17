import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import { PrivateRoute } from './components/PrivateRoute';
import  Navigation  from './components/Navigation';

// pages
import { Login } from './pages/Login';
import { Register } from './pages/Register';


const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>



export default function AuthExample () {
  return (
    <Router>
      <div>
      <Navigation/>       
        <Route path="/public" component={Public}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <PrivateRoute path='/protected' component={Protected} />
      </div>
    </Router>
  )
}