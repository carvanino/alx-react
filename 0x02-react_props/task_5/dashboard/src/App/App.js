import React from "react";
import { useState } from "react";
import './App.css';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from '../Notifications/Notifications';
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";

function App({ isLoggedIn }) {
  const [listCourses, setListCourses] = useState([
    {
      id: 1,
      name: 'ES6',
      credit: 60
    },
    {
      id: 2,
      name: 'Webpack',
      credit: 20
    },
    {
      id: 3,
      name: 'React',
      credit: 40
    }
  ]);
  const [listNotifications, setListNotifications] = useState([
    {
      id: 1,
      value: "New course available",
      type: "default"
    },
    {
      id: 2,
      value: "New resume available",
      type: "urgent"
    },
    {
      id: 3,
      type: "urgent",
      html: {
        __html: getLatestNotification()
      }
    }
  ])
  return (
    <>
      <Notifications listNotifications={listNotifications} />
      <div className='App' style={{ position: 'relative' }}>
        <Header />
        <div className='App-body'>
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          {/* <Login />
          <CourseList /> */}
        </div>
        <Footer />
      </div>

    </>
  );
}

App.defaultProps = {
  isLoggedIn: true
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;
