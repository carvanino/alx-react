import React from "react";
// import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';
import withLogging from "../HOC/withLogging";
import {StyleSheet, css} from 'aphrodite';

function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        
        <div className={css(styles.formGroup)}>
          <label className={css(styles.label)}htmlFor="email">Email:</label>
          <input className={css(styles.input)} type='text' id="email"></input>
        </div>

        <div className={css(styles.formGroup)}>
          <label htmlFor="password">Password:</label>
          <input className={css(styles.input)} type='password' id="password"></input>
        </div>

        <button>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  form: {
    marginLeft: "35px",
    display: 'block',
  },

  formGroup: {
    display: 'inline-block',
    '@media (max-width: 900px)': {
      display: 'flex',
      alignItems: 'center',
    },
  },

  label: {
    '@media (max-width: 900px)': {
      display: "inline",
    },
  },

  input: {
    display: "inline",
    margin: "15px",

    '@media (max-width: 900px)': {
      display: "inline",
      margin: '3px',
    }
  }
})

export default withLogging(Login);
// module.exports = { App }
