import React from "react";
import { StyleSheet, css } from "aphrodite";
// import './App.css';
import Notification from '../Notifications/Notifications'
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import withLogging from "../HOC/WithLogging";

// import Notifications from './Notifications';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ],

      listNotifications: [
        { id: 1, type: 'urgent', value: 'New resume available' },
        { id: 2, type: 'default', value: 'New course available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
      ]
    };
    this.handlePressDown = this.handlePressDown.bind(this);
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handlePressDown);
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlePressDown);
  };

  handlePressDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      // console.log(event.ctrlKey, event.key)
      alert('Logging you out');
      this.props.logOut();
    }
  };
  render() {
    const MyComponentWithLogging = withLogging(Header);
    return (
      <>
        <Notification listNotifications={this.state.listNotifications} />
        <div className='App'>
          <Header />
          <MyComponentWithLogging />
          <div className={css(styles.appBody)}>
            {
              this.props.isLoggedIn ?
                <BodySectionWithMarginBottom title="Course List">
                  <CourseList listCourses={this.state.listCourses} />
                </BodySectionWithMarginBottom>
                :
                <BodySectionWithMarginBottom title="Log in to Continue">
                  <Login />
                </BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School">
              <p className={css(styles.paragraph)}>Random text to signify News</p>
            </BodySection>
          </div>
        </div >
        <Footer className={css(styles.footer)} />
      </>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

export default App;
// module.exports = { App }

const styles = StyleSheet.create({
  appBody: {
    borderBottom: "3px solid #e0354b",
    padding: "15px",
    height: "auto",
  },
  paragraph: {
    marginLeft: "35px"
  },
  footer: {
    padding: "15px",
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "700"
  }
});