import React from "react";
import BodySection from "./BodySection";
import './BodySectionWithMarginBottom.css';
import PropTypes from "prop-types";

class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="bodySectionWithMargin">
                <BodySection title={this.props.title}>
                    {this.props.children}
                </BodySection>
            </div>
        )
    }
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default BodySectionWithMarginBottom;
