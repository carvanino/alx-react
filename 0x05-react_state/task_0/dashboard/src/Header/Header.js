import React, {Component} from "react";
// import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';
import AppContext from "../App/AppContext";
// import Notifications from './Notifications';
  
class Header extends Component {
  static contextType = AppContext;
  render() {
    let user = this.context.user;
    let logOut = this.context.logOut;
    return (
      <div>
        <img src={logo} alt='Holberton logo' width={200} height={200}></img>
        <h1>School Dashboard</h1>
        {user.isLoggedIn && <section id="logoutSection">Welcome {user.email} <a onClick={logOut}>Logout</a></section> }
      </div>
    );
  }
}

// Header.contextType = AppContext;

export default Header;