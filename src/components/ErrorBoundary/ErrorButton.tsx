import React from 'react';
import style from './Button.module.css';

class ErrorButton extends React.Component {
  throwError = () => {
    throw new Error('Test error thrown');
  };

  render() {
    return (
      <button className={style.search_button} onClick={this.throwError}>
        try to destroy the galaxy
      </button>
    );
  }
}

export default ErrorButton;
