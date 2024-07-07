import React from 'react';
import style from './Button.module.css';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

class Button extends React.Component<ButtonProps> {
  render() {
    const { type, onClick } = this.props;
    return (
      <button className={style.search_button} type={type} onClick={onClick}>
        Find me him
      </button>
    );
  }
}

export default Button;
