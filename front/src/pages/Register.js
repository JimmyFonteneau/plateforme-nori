import React, { Component } from 'react';
import { Auth } from '../lib/auth';
import { Redirect } from "react-router-dom";
import { Form, FormCheck } from 'react-bootstrap';
import { post } from '../lib/apiCalls';

class Register extends React.Component {
  state = {
    pro: false,
    etudiant: true,
  }

  register = async () => {
     
  }

  handleChange = (event) => {  
    const { name, value } = event.target;   
    this.setState({
      [name]: value
    });
  }

  render() {       
    const { etudiant, pro } = this.state;    
    return (
      <div>
        {etudiant ? <button onClick={() => {
            this.setState({pro: !pro, etudiant: !etudiant})
        }}>Je m'inscris comme pro</button> : null} 
        {pro ? <button onClick={() => {
            this.setState({etudiant: !etudiant, pro: !pro})
        }}>Je m'inscris comme etudiant</button> : null}
        {etudiant && etudiant ? (
            <p>Formulaire d'inscription étudiant</p>
        ) : (
            <p>Formulaire d'inscription pro</p>
        )}              
      </div>
    )
  }
}

export { Register };