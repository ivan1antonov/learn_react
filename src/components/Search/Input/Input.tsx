import React from 'react';
import style from './Input.module.css';

interface InputProps {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Input extends React.Component<InputProps> {
  render() {
    const { type, id, name, value, onChange } = this.props;
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
  }
}

export default Input;
