import React, {Component} from 'react';
// import closeIcon from '../assets/close-icon.png';
const closeIcon = require("../assets/close-icon.png");
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import './NotificationItem';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import withLogging from '../HOC/withLogging';



class Notifications extends Component {
  static defaultProps = {
    displayDrawer: true,
    listNotifications: [],
  }
  
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
  }
  
  handleButtonClick = () => { 
      console.log('Close button has been clicked');
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(newProps) {
    return newProps.listNotifications.length > this.props.listNotifications.length || newProps.displayDrawer !== this.props.displayDrawer;
  }

  render () {
    const {displayDrawer, listNotifications} = this.props;
    return (
      <>
  
        <div className={'menuItem'}>
          <p>Your notifications</p>
        </div>
  
        {displayDrawer && (
          <div className='Notifications'>
  
              <button type='button' aria-label='Close' style={{ position: 'absolute', right: 0, top: 0, border: 'none', backgroundColor: 'transparent' }} onClick={this.handleButtonClick}>
                <img src={closeIcon} width={10} height={10} alt='Close'></img>
              </button>
  
              {listNotifications?.length > 0 ? (

                <>
  
                  <p>Here is the list of Notifications</p>
  
                  <ul>
                    {listNotifications.map(({type, html, id, value}) => (
                      <NotificationItem key={id} type={type} html={html} value={value} markAsRead={() => this.markAsRead(id)}/>
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

export default withLogging(Notifications);