import React, { PureComponent} from 'react';
const closeIcon = require("../assets/close-icon.png");
import { getLatestNotification } from '../utils/utils';
import './NotificationItem';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import withLogging from '../HOC/withLogging';
import { StyleSheet, css } from 'aphrodite';


const opacity = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  }
}

const transformKeyframes = {
  '0%': {
    transform: 'translateY(-5px)',
  },
  '50%': {
    transform: 'translateY(0)',
  },
  '100%': {
    transform: 'translateY(5px)',
  }
}

class Notifications extends PureComponent {
  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleHideDrawer: () => {},
    handleDisplayDrawer: () => {},
  }
  
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleHideDrawer: PropTypes.func,
    handleDisplayDrawer: PropTypes.func,
  }
  
  handleButtonClick = () => {   
      console.log('Close button has been clicked');
  }

  // shouldComponentUpdate(newProps) {
  //   return newProps.listNotifications.length > this.props.listNotifications.length || 
  //     newProps.displayDrawer !== this.props.displayDrawer;
  // }

  render () {
    const {
      displayDrawer, 
      listNotifications, 
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    return (
      <>
  
        <div 
          className={!displayDrawer ? css(style.menuItem): css(style.hideMenu)}
          onClick={handleDisplayDrawer}
        >
          <p>Your notifications</p>
        </div>
  
        {displayDrawer && (
          <div className={ css(style.Notifications)}>
  
              <button type='button' aria-label='Close' className={css(style.button)} onClick={handleHideDrawer}>
                <img src={closeIcon} width={10} height={10} alt='Close'></img>
              </button>
  
              {listNotifications?.length > 0 ? (

                <>  
  
                  <p>Here is the list of Notifications</p>
  
                  <ul className={css(style.list)}>
                    {listNotifications.map(({type, html, id, value}) => (
                      <NotificationItem key={id} type={type} html={html} value={value} markAsRead={() => markNotificationAsRead(id)}/>
                    ))}
                  </ul>
  
                </>
              ) : (
                <p>No new notification for now</p>
              )
              }
  
  
          </div>
        )}
  
      </>
    )
  }
}

const style = StyleSheet.create({
  Notifications: {
    position: 'absolute',
    width: '450px',
    right: '10px',
    border: '2px dashed red',
    padding: '15px',
    top: '30px',

    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      fontSize: '20px',
      right: '0',
      left: '0',
      border: 'none',
      position: 'fixed',
      backgroundColor: 'white',
      padding: '0px',
    }
  }, 

  list: {
    '@media (max-width: 900px)': {
      padding: '0px',
    }
  },

  menuItem: {
    position: 'absolute',
    right: '10px',
    top: '-10px',
    backgroundColor: '#fff8f8',
    ':hover': {
      animationName: [opacity, transformKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    }
  },

  hideMenu: {
    display: 'none',
  },

  button: {
    position: 'absolute', 
    right: 0, 
    top: 0, 
    border: 'none', 
    backgroundColor: 'transparent',
  }
})

export default withLogging(Notifications);