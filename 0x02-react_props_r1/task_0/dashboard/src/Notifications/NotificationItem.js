import React from 'react';
import './NotificationItem.css';
import PropTypes from 'prop-types';

function NotificationItem({type, html, value}) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
  )
}

NotificationItem.defaultProps = {
  type: 'default',
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
}

export default NotificationItem;