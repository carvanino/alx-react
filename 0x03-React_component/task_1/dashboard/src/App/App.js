import React from "react";
// import { useState } from "react";
import './App.css';
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from '../Notifications/Notifications';
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
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
      ],
      listNotifications: [
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
      ]
    }
  }

  componentDidMount() {
    this.handleKeyPress();
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = () => {
    // console.log('listening for keypress event');
    window.addEventListener("keydown", (event) => {
      if (event.ctrlKey && event.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    })

  }

  render() {
    return (
      <>
        <Notifications listNotifications={this.state.listNotifications} />
        <div className='App' style={{ position: 'relative' }}>
          <Header />
          <div className='App-body'>
            {this.props.isLoggedIn ? <CourseList listCourses={this.state.listCourses} /> : <Login />}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}


App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {
    console.log('logged out')
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

export default App;
