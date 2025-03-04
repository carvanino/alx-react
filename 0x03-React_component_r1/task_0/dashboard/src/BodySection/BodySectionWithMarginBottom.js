import React, { Component } from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';

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
      <div className={'bodySectionWithMargin'}>
        <BodySection {...this.props} />
      </div>
    )
  }
}

export default BodySectionWithMarginBottom;