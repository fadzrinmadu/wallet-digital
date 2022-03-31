import './style.css';
import React from 'react';

export default function FormInput(props: any) {
  const { text, field, type = 'text', onChange } = props;

  return (
    <div className="form-input">
      <label htmlFor={field}>{text}</label>
      <input type={type} id={field} autoComplete="off" onChange={onChange} />
    </div>
  );
}
