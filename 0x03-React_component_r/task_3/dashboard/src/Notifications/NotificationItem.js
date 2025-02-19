import React from 'react';
import PropTypes from 'prop-types'


class NotificationItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html} onClick={this.props.markAsRead}>{this.props.value}</li>
        );
    }
}


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
export default NotificationItem;