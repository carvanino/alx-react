import React from "react";
import './App.css';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        <div className='App-body'>
          <Login />
        </div>
        <Footer/>
      </div>

    </>
  );
}

export default App;
