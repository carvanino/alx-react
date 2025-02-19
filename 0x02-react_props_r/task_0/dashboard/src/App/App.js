import React from "react";
import './App.css';
import Notification from '../Notifications/Notifications'
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// import Notifications from './Notifications';

function App() {
  return (
    <>
      <Notification />
      <div className='App'>
        <Header />
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
          <Login />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
// module.exports = { App }
