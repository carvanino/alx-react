import React from "react";
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

function Header() {
  return (
    <div className='App-header'>
      <img src={logo} alt='Holberton logo' width={200} height={200}></img>
      <h1>School Dashboard</h1>
    </div>
  )
}

export default Header;