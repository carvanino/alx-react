import React, {Component} from 'react';

class BodySection extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default BodySection;
