import React, { PureComponent } from 'react';
import './NotificationItem.css';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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
        className={type === 'urgent' ? css(style.red, style.list) : css(style.blue, style.list)}
        data-notification-type={type} 
        dangerouslySetInnerHTML={html} 
        onClick={markAsRead}
      >
        {value}
      </li>
    )
  }
}

const style = StyleSheet.create({
  red: {
    color: 'red',
  },
  blue: {
    color: 'blue',
  },
  list: {
    '@media (max-width: 900px)': {
      listStyle: 'none',
      borderBottom: '2px solid black',
      fontSize: '20px',
      padding: '10px 8px',
    },

  }
})


export default NotificationItem;