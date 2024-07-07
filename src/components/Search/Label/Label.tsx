import React from 'react';
import style from './Label.module.css';

interface LabelProps {
  htmlFor: string;
}

class Label extends React.Component<LabelProps> {
  render() {
    const { htmlFor } = this.props;
    return (
      <label className={style.search_label} htmlFor={htmlFor}>
        Enter your request
      </label>
    );
  }
}

export default Label;
