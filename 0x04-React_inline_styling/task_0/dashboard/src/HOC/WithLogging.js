import React from "react";
function withLogging(WrappedComponent) {

    class WithLogging extends React.Component {

        componentDidMount() {
            const componentName = getDisplayName(WrappedComponent);
            console.log(`Component ${componentName} is mounted on componentDidMount()`);
        };

        componentWillUnmount() {
            const componentName = getDisplayName(WrappedComponent);
            console.log(`Component ${componentName} will unmount on componentWillUnmount()`);
        };
        render() {
            return (
                <WrappedComponent />
            )
        }
    }
    WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`
    return WithLogging;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withLogging;