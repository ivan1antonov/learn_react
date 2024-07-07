import React from 'react';

class ErrorButton extends React.Component {
  throwError = () => {
    throw new Error('Test error thrown');
  };

  render() {
    return <button onClick={this.throwError}>Throw Error</button>;
  }
}

export default ErrorButton;
