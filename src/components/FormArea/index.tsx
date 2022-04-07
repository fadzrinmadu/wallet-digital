import React from 'react';
import './style.css';

interface FormAreaProps {
  text: string;
  field: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FormArea(props: FormAreaProps) {
  const { text, field, value, onChange } = props;

  return (
    <div className="form-input">
      <label htmlFor={field}>{text}</label>
      <textarea id={field} cols={30} rows={10} value={value} onChange={onChange}></textarea>
    </div>
  )
}
