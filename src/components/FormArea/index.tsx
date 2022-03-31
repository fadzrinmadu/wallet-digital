import './style.css';
import React from 'react';

export default function FormArea(props: any) {
  const { text, field } = props;

  return (
    <div className="form-input">
      <label htmlFor={field}>{text}</label>
      <textarea id={field} cols={30} rows={10}></textarea>
    </div>
  )
}
