import React from "react";
import './App.css';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from '../Notifications/Notifications';
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';

function App({ isLoggedin }) {
  return (
    <>
      <Notifications />
      <div className='App' style={{position: 'relative'}}>
        <Header />
        <div className='App-body'>
          {isLoggedin ? <CourseList /> : <Login />}
          {/* <Login />
          <CourseList /> */}
        </div>
        <Footer />
      </div>

    </>
  );
}

App.defaultProps = {
  isLoggedin: true
}

App.propTypes = {
  isLoggedin: PropTypes.bool
}

export default App;
