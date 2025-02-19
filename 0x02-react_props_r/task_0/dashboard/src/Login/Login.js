import React from "react";
import './Login.css';

function Login() {
  return (
    <>
      <form>
        <label htmlFor="email">Email:</label>
        <input type='text' id="email"></input>
        <label htmlFor="password">Password:</label>
        <input type='password' id="password"></input>
        <button>OK</button>
      </form>
    </>
  )
}

export default Login;