import React, { memo } from 'react';
import PropTypes from 'prop-types'


function NotificationItem({ html, type, value, markAsRead }) {
    return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}>{value}</li>
    );
};


NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
    type: "default",
    markAsRead: () => { }
}
export default memo(NotificationItem);