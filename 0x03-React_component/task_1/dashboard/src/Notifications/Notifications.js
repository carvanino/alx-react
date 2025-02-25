import React from 'react';
import PropTypes from 'prop-types';
// import closeIcon from '../assets/close-icon.png';
const closeIcon = require("../assets/close-icon.png");
// import { createPortal } from 'react-dom';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
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
                <div className='Notifications' style={{ position: 'absolute' }}>
                    <button type='button' aria-label='Close' style={{ position: 'absolute', right: 0, top: 0, border: 'none', backgroundColor: 'transparent' }} onClick={handleButtonClick}>
                        <img src={closeIcon} width={10} height={10} alt='Close'></img>
                    </button>
                    <p>Here is the list of Notifications</p>
                    <ul>
                        {listNotifications.length > 0 ?
                            listNotifications.map((notification) => {
                                return (<NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />)
                            }) :
                            <NotificationItem value={'No new notification for now'} />}
                    </ul>
                </div>}
        </>

    )
    // return createRoot(
    //     <div className='Notifications'>
    //         <p>Here is the list of Notifications</p>
    //     </div>
    // )
}


Notifications.defaultProps = {
    displayDrawer: true,
    listNotifications: []
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

// module.exports = { Notifications };