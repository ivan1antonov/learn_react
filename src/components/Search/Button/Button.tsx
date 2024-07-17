import React from 'react';
import style from './Button.module.css';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, onClick }) => {
  return (
    <button className={style.search_button} type={type} onClick={onClick}>
      Find me him
    </button>
  );
};

export default Button;
