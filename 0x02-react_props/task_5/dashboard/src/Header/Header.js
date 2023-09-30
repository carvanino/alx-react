import React from "react";
import './Header.css';
import logo from '../assets/holberton-logo.jpg';

function Header() {
    return (
        <div className='App-header'>
            <img src={logo} alt='Holberton logo' width={200} height={200}></img>
            <h1>School Dashboard</h1>
        </div>
    )
}

export default Header;