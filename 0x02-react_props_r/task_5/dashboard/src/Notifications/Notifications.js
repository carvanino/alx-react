import React from 'react';
// import closeIcon from '../assets/close-icon.png';
const closeIcon = require("../assets/close-icon.png");
// import { createPortal } from 'react-dom';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import PropTypes from "prop-types";
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };
    return (
        <>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            {displayDrawer &&
                <div className='Notifications' style={{ position: 'absolute', right: 8 }}>
                    <button type='button' aria-label='Close' style={{ position: 'absolute', right: 0, top: 0, border: 'none', backgroundColor: 'transparent' }} onClick={handleButtonClick}>
                        <img src={closeIcon} width={10} height={10} alt='Close'></img>
                    </button>
                    {listNotifications.length > 0 ?
                        <>
                            <p>Here is the list of Notifications</p>
                            <ul>
                                {listNotifications.map(notification => (
                                    <NotificationItem type={notification.type} value={notification.value} html={notification.html} key={notification.id} />
                                ))}
                            </ul>
                        </>
                        : <NotificationItem value="No new notification for now" />
                    }
                </div>
            }
        </>
    )
    // return createRoot(
    //     <div className='Notifications'>
    //         <p>Here is the list of Notifications</p>
    //     </div>
    // )
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: true
}

// module.exports = { Notifications };