import './style.css';
import React from 'react';
import TransactionItem from './TransactionItem';

export default function TransactionHistory() {
  return (
    <div className="transaction-history">
      <h2>You transaction history</h2>
      <div className="transaction-card">
        <span className="transaction-date">6 Sep 2021</span>
        <TransactionItem
          accountName="Jackie"
          accountNumber="4992-321-3321"
          total="1,200.00"
        />
        <TransactionItem
          accountName="Tim Cook"
          accountNumber="4992-321-3321"
          total="-310.00"
        />
      </div>
      <div className="transaction-card">
        <span className="transaction-date">5 Sep 2021</span>
        <TransactionItem
          accountName="Jackie"
          accountNumber="4992-321-3321"
          total="1,200.00"
        />
        <TransactionItem
          accountName="Tim Cook"
          accountNumber="4992-321-3321"
          total="-310.00"
        />
        <TransactionItem
          accountName="Tim Cook"
          accountNumber="4992-321-3321"
          total="-20.00"
        />
      </div>
    </div>
  );
}
