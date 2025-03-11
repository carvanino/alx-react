import React from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";
// import './BodySectionWithMarginBottom.css';
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: "40px",
    }
})

class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.bodySectionWithMargin}>
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