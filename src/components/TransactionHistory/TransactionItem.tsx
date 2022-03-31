import React from 'react';

export default function TransactionItem(props: any) {
  const { accountName, accountNumber, total } = props;

  // check + or -
  const isPlus = total.split('')[0];

  return (
    <div className="transaction-item">
      <div className="transaction-data">
        <div className="account-name">{accountName}</div>
        <div className="account-number">{accountNumber}</div>
      </div>
      <div>
        <div className={`transaction-total ${isPlus !== '-' && 'plus'}`}>{total}</div>
      </div>
    </div>
  );
}
