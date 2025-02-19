import React from "react";
import './App.css';
import Notification from '../Notifications/Notifications'
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

// import Notifications from './Notifications';

function App({ isLoggedIn }) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ]

  const listNotifications = [
    // { id: 1, type: 'urgent', value: 'New resume available' },
    // { id: 2, type: 'default', value: 'New course available' },
    // { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
  ]

  let mainContent;
  if (isLoggedIn) {
    mainContent = <CourseList listCourses={listCourses} />
  } else {
    mainContent = <Login />
  }
  return (
    <>
      <Notification listNotifications={listNotifications} />
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
