import React,  {Component} from "react";
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

class App extends Component {
  static defaultProps = {
    isLoggedIn: true,
    logOut: () => {},
  }
  
  constructor(props) {
    super(props);
    this.state = {
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
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
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
      this.props.logOut();
    }
  }
  

  render() {
    const {isLoggedIn} = this.props;
    const {listNotifications, listCourses} = this.state;

    return (
      <>
        <Notifications listNotifications={listNotifications}/>
        <div className='App'>
          <div className='App-header'>
            <Header />
          </div>
          <div className='App-body'>
            {isLoggedIn ? (
              <BodySectionWithMarginBottom title={'Course list'}>
                <CourseList listCourses={listCourses}/>
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title={'Log in'}>
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title={'News from the School'}>
              <p>Lorem one ipsum dolor sit amet, consectetur adipiscing elit. Quisque et neque ex. Maecenas at semper orci, at luctus dui. Nunc efficitur sem neque, non elementum turpis porta eget. Nunc efficitur sem neque, non elementum turpis porta eget.</p>
            </BodySection>
          </div>
          <div className='App-footer'>
            <Footer />
          </div>
        </div>
      </>
    )
  }
};

export default App;

