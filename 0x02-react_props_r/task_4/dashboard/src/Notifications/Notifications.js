import React from 'react';
// import closeIcon from '../assets/close-icon.png';
const closeIcon = require("../assets/close-icon.png");
// import { createPortal } from 'react-dom';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import PropTypes from "prop-types";

export default function Notifications({ displayDrawer }) {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };
    if (displayDrawer) {
        return (
            <>
                <div className='menuItem'>
                    <p>Your notifications</p>
                </div>
                <div className='Notifications' style={{ position: 'absolute', right: 8 }}>
                    <button type='button' aria-label='Close' style={{ position: 'absolute', right: 0, top: 0, border: 'none', backgroundColor: 'transparent' }} onClick={handleButtonClick}>
                        <img src={closeIcon} width={10} height={10} alt='Close'></img>
                    </button>
                    <p>Here is the list of Notifications</p>
                    <ul>
                        <NotificationItem type="urgent" value="New Course Available" />
                        <NotificationItem type={"urgent"} value={"New Resume availabe"} />
                        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
                    </ul>
                </div>
            </>
        )
    } else {
        return (
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
        )
    }
    // return createRoot(
    //     <div className='Notifications'>
    //         <p>Here is the list of Notifications</p>
    //     </div>
    // )
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
    displayDrawer: true
}

// module.exports = { Notifications };