import React from 'react';
// import closeIcon from '../assets/close-icon.png';
const closeIcon = require("../assets/close-icon.png");
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import './NotificationItem';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}


export default function Notifications({displayDrawer, listNotifications}) {
  const handleButtonClick = () => {
      console.log('Close button has been clicked');
  };
  return (
    <>

      <div className={'menuItem'}>
        <p>Your notifications</p>
      </div>

      {displayDrawer && (
        <div className='Notifications'>

            <button type='button' aria-label='Close' style={{ position: 'absolute', right: 0, top: 0, border: 'none', backgroundColor: 'transparent' }} onClick={handleButtonClick}>
              <img src={closeIcon} width={10} height={10} alt='Close'></img>
            </button>

            {listNotifications?.length > 0 ? (

              <>

                <p>Here is the list of Notifications</p>

                <ul>
                  <NotificationItem type={'default'} value={'New course available'} />
                  <NotificationItem type={'urgent'} value={'New resume available'} />
                  <NotificationItem type={'urgent'} html={{ __html: getLatestNotification() }} />
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