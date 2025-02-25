import React from "react";
// import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';
// import Notifications from './Notifications';

function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input type='text' id="email"></input>
        <label htmlFor="password">Password:</label>
        <input type='password' id="password"></input>
        <button>OK</button>
      </form>
    </div>
  );
}

export default Login;
// module.exports = { App }
