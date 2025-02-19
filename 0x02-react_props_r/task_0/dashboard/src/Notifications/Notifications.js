import React from 'react';
// import closeIcon from '../assets/close-icon.png';
const closeIcon = require("../assets/close-icon.png");
// import { createPortal } from 'react-dom';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    };
    return (
        <div className='Notifications' style={{ position: 'relative' }}>
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
    )
    // return createRoot(
    //     <div className='Notifications'>
    //         <p>Here is the list of Notifications</p>
    //     </div>
    // )
}

// module.exports = { Notifications };