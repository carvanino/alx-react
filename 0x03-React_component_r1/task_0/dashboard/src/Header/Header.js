import React from "react";
// import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';
// import Notifications from './Notifications';

function Header() {
  return (
    <div>
      <img src={logo} alt='Holberton logo' width={200} height={200}></img>
      <h1>School Dashboard</h1>
    </div>
  );
}

export default Header;
// module.exports = { App }
