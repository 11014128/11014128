import { Button } from '@material-ui/core';
import React from 'react';
import './login.css';
import logo from './images/logo.png';

const Login = () => {
  
  return (
    <div className='login'>
      <div className='login_logo'>

        <div class="row">
          <div class="column">
            <img className="logo" src={logo} /></div>
          <div class="column">
            <h1 className='title'>DOC-EDITOR</h1></div>

        </div>

      </div>
      <div className="login-show">
        <h3>Login as</h3>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="button" value="sign-In" />

      </div>
      <div className='login-via'>
        <p4>OR </p4>
        <input type="button" value="Sign in with Google"  />

      </div>


    </div>
  );
};



export default Login;
