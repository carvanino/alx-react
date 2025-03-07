import React,  {Component} from "react";
// import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";
import {StyleSheet, css} from 'aphrodite';
import { getLatestNotification } from "../utils/utils";
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import AppContext from "./AppContext";
import { defaultUser, defaultLogOut } from "./AppContext";

class App extends Component {
  static defaultProps = {
    // isLoggedIn: false,
    // logOut: () => {},
  }
  
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: defaultLogOut,
      listCourses: [
        {id: 1, name: 'ES6', credit: 60},
        {id: 2, name: 'Webpack', credit: 20},
        {id: 3, name: 'React', credit: 40},
      ],
      listNotifications: [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
      ],
    }
  }

  static propTypes = {
    // isLoggedIn: PropTypes.bool,
    // logOut: PropTypes.func,
  }

  markNotificationAsRead = (id) => {
    this.setState({
      listNotifications: this.state.listNotifications.filter((notification) => notification.id !== id),
    })
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDownPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDownPress);
  }

  handleKeyDownPress = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.state.logOut();
    }
  }

  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true,
    });
  }

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false,
    });
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
      logOut: this.logOut,
    })
  }

  logOut = () => {
    this.setState({
      user: defaultUser,
    });
  }

  render() {
    const { isLoggedIn } = this.state.user;
    const {listNotifications, listCourses, displayDrawer} = this.state;

    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <Notifications 
          listNotifications={listNotifications} 
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className='App'>
          <div className={css(styles.header)}>
            <Header />
          </div>
          <div className={css(styles.body)}>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title={'Course list'}>
                <CourseList listCourses={listCourses}/>
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title={'Log in'}>
                <Login logIn={this.logIn}/>
              </BodySectionWithMarginBottom>
            )}
            <BodySection title={'News from the School'}>
              <p>Lorem one ipsum dolor sit amet, consectetur adipiscing elit. Quisque et neque ex. Maecenas at semper orci, at luctus dui. Nunc efficitur sem neque, non elementum turpis porta eget. Nunc efficitur sem neque, non elementum turpis porta eget.</p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer user={this.state.user} />
          </div>
        </div>
      </AppContext.Provider>
    )
  }
};

const styles = StyleSheet.create({
  logo: {
    height: '40vmin',
    pointerEvents: 'none',
  },
  
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#e0354b',
    borderBottom: '3px solid #e0354b',
    padding: '15px',
  },
  
  body: {
    borderBottom: '3px solid #e0354b',
    padding: '15px',
    height: 'auto',
  },


  footer: {
    padding: '15px',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 700,
  }
})

export default App;

