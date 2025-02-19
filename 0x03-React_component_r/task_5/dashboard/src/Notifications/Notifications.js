import React from 'react';
// import closeIcon from '../assets/close-icon.png';
const closeIcon = require("../assets/close-icon.png");
// import { createPortal } from 'react-dom';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import PropTypes from "prop-types";
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.markAsRead = this.markAsRead.bind(this);
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length !== this.props.listNotifications.length
    }
    handleButtonClick = () => {
        console.log('Close button has been clicked');
    };
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    };
    render() {
        return (
            <>
                <div className='menuItem'>
                    <p>Your notifications</p>
                </div>
                {this.props.displayDrawer &&
                    <div className='Notifications' style={{ position: 'absolute', right: 8 }}>
                        <button type='button' aria-label='Close' style={{ position: 'absolute', right: 0, top: 0, border: 'none', backgroundColor: 'transparent' }} onClick={this.handleButtonClick}>
                            <img src={closeIcon} width={10} height={10} alt='Close'></img>
                        </button>
                        {this.props.listNotifications.length > 0 ?
                            <>
                                <p>Here is the list of Notifications</p>
                                <ul>
                                    {this.props.listNotifications.map(notification => (
                                        <NotificationItem type={notification.type} value={notification.value} html={notification.html} key={notification.id} markAsRead={() => this.markAsRead(notification.id)} />
                                    ))}
                                </ul>
                            </>
                            : <NotificationItem value="No new notification for now" />
                        }
                    </div>
                }
            </>
        )
    }
    // return createRoot(
    //     <div className='Notifications'>
    //         <p>Here is the list of Notifications</p>
    //     </div>
    // )
}

export default Notifications;

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)

};

Notifications.defaultProps = {
    displayDrawer: true
}

// module.exports = { Notifications };