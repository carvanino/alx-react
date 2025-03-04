import React, { PureComponent } from 'react';
import './NotificationItem.css';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  static defaultProps = {
    type: 'default',
    markAsRead: () => {},
  }
  
  static propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
  }

  render () {
    const { type, html, value, markAsRead } = this.props;
    return (
      <li 
        data-notification-type={type} 
        dangerouslySetInnerHTML={html} 
        onClick={markAsRead}
      >
        {value}
      </li>
    )
  }
}


export default NotificationItem;