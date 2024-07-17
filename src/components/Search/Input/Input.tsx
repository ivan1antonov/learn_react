import React from 'react';
import style from './Input.module.css';

interface InputProps {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, id, name, value, onChange }) => {
  return (
    <input
      className={style.search_input}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder="Enter your favorite person"
    />
  );
};

export default Input;
