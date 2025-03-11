import React from "react";
import logo from '../assets/holberton-logo.jpg';
// import './Header.css';
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <div className={css(styles.appHeader)}>
      <img className={css(styles.img)} src={logo} alt="Holberton logo"></img>
      <h1>School Dashboard</h1>
    </div>
  )
}

export default Header;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200
  },
  appHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#e0354b",
    borderBottom: "3px solid #e0354b",
    padding: "15px"
  }
})