import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  text: string
  isSecondary?: boolean
  isButtonHome?: boolean
  type?: ButtonType
  href?: string
  isDisabled?: boolean;
  onClick?: () => void
}

type ButtonType = 'link' | 'button';

export default function Button({
  text, isSecondary, isButtonHome, type, href = '', isDisabled, onClick,
}: ButtonProps) {
  let classname = `button ${!isSecondary ? 'button-primary' : 'button-secondary'}`;

  if (isButtonHome) {
    classname += ' mb-40';
  }

  if (type === 'link') {
    return (
      <Link to={href} className={classname}>
        {text}
      </Link>
    );
  }

  return (
    <button type="button" className={classname} onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
}
