import React, {Component} from "react";
// import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';
import withLogging from "../HOC/withLogging";
import {StyleSheet, css} from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    }
  }

  handleLoginSubmit = () => {
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail = (value) => {
    this.setState({
      email: value,
    })
    if(this.state.password.length > 0 && value.length > 0) {
      this.setState({
        enableSubmit: true,
      })
    }
  }

  handleChangePassword = (value) => {
    this.setState({
      password: value,
    })

    if (this.state.email.length > 0 && value.length > 0) {
      this.setState({
        enableSubmit: true,
      })
    }
  }

  render () {
    const { enableSubmit } = this.state;
    return (
      <div>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
          
          <div className={css(styles.formGroup)}>
            <label className={css(styles.label)}htmlFor="email">Email:</label>
            <input 
              className={css(styles.input)} 
              type='text' 
              id="email"
              value={this.state.email}
              onChange={(e) => this.handleChangeEmail(e.target.value)}
            />   
          </div>
  
          <div className={css(styles.formGroup)}>
            <label htmlFor="password">Password:</label>
            <input 
              className={css(styles.input)} 
              type='password' 
              id="password"
              value={this.state.password}
              onChange={(e) => this.handleChangePassword(e.target.value)}
            />
          </div>
  
          <input type="submit" value="OK" disabled={!enableSubmit}/>
        </form>
      </div>
    );
  }
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
