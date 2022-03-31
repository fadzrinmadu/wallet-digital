import './style.css';
import React from 'react';

export default function AccountInformation() {
  return (
    <div className="account">
      <h2>You have</h2>
      <div className="account-money">SGD 21,421.33</div>
      <ul className="account-details">
        <li>
          <p>Account No</p>
          <p>3212-321-9923</p>
        </li>
        <li>
          <p>Account Holder</p>
          <p>Donald Trump</p>
        </li>
      </ul>
    </div>
  );
}
