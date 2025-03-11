import React from "react";
// import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';
// import Notifications from './Notifications';

function Footer() {
  return (
    <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
  );
}

export default Footer;
// module.exports = { App }
