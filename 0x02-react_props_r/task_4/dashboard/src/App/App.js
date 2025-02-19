import React from "react";
import './App.css';
import Notification from '../Notifications/Notifications'
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";

// import Notifications from './Notifications';

function App({ isLoggedIn }) {
  let mainContent;
  if (isLoggedIn) {
    mainContent = <CourseList />
  } else {
    mainContent = <Login />
  }
  return (
    <>
      <Notification />
      <div className='App'>
        <Header />
        <div className='App-body'>
          {mainContent}
        </div>
      </div>
      <Footer />
    </>
  )
}

App.defaultProps = {
  isLoggedIn: true
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
// module.exports = { App }
