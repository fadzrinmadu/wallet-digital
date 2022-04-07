import './style.css';
import React from 'react';

interface FormInputProps {
  text: string;
  field: string;
  type?: string;
  defaultValue?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput(props: FormInputProps) {
  const { text, field, type = 'text', defaultValue, onChange } = props;

  return (
    <div className="form-input">
      <label htmlFor={field}>{text}</label>
      <input type={type} id={field} autoComplete="off" defaultValue={defaultValue} onChange={onChange} />
    </div>
  );
}
