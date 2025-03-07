import React, { Component } from 'react';

function withLogging(WrappedComponent) {
  class withLogging extends Component {
    componentDidMount() {
      console.log(`Component ${ WrappedComponent.name} is mounted`)
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  withLogging.displayName = `withLogging(${WrappedComponent.name})`;
  return withLogging;
}

export default withLogging;