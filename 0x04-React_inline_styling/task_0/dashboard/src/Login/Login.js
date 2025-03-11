import React from "react";
// import './Login.css';
import { StyleSheet, css } from "aphrodite";


const styles = StyleSheet.create({
  form: {
    marginLeft: "35px"
  },
  input: {
    display: "inline",
    margin: "15px",
  }
})

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <label htmlFor="email">Email:</label>
        <input className={css(styles.input)} type='text' id="email"></input>
        <label htmlFor="password">Password:</label>
        <input className={css(styles.input)} type='password' id="password"></input>
        <button>OK</button>
      </form>
    </>
  )
}

export default Login;