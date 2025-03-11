import React, { Component } from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    )
  }
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  }
})

export default BodySectionWithMarginBottom;