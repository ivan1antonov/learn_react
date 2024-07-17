import React from 'react';
import style from './Label.module.css';

interface LabelProps {
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor }) => {
  return (
    <label className={style.search_label} htmlFor={htmlFor}>
      Enter your request
    </label>
  );
};

export default Label;
