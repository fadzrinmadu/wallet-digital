import './style.css';
import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { getTransactions } from '../../services/transactions';
import { mapTransactionsByDate } from '../../utilities';
import { TransactionTypes, TransactionByDateTypes } from '../../services/data-types';
import TransactionItem from './TransactionItem';

export default function TransactionHistory() {
  const [transactionsByDate, setTransactionsByDate] = useState<TransactionByDateTypes[]>([]);
  const [cookies] = useCookies(['token']);

  const getUserTransactions = useCallback(async () => {
    const result = await getTransactions(cookies.token);
    const mappedTransactions = mapTransactionsByDate(result.data);
    setTransactionsByDate(mappedTransactions);
  }, [cookies.token]);

  useEffect(() => {
    getUserTransactions();
  }, [getUserTransactions]);

  console.log(transactionsByDate);

  return (
    <div className="transaction-history">
      <h2>You transaction history</h2>

      {transactionsByDate.length > 0 && transactionsByDate.map((transactionByDate: TransactionByDateTypes) => {
        return (
          <div className="transaction-card" key={transactionByDate.date}>
            <span className="transaction-date">{transactionByDate.date}</span>
            {transactionByDate.transactions.map((transaction: TransactionTypes) => (
              <TransactionItem
                key={transaction.transactionId}
                accountName={transaction.transactionType === 'received' ? transaction.sender.accountHolder : transaction.receipient.accountHolder}
                accountNumber={transaction.transactionType === 'received' ? transaction.sender.accountNo : transaction.receipient.accountNo}
                transactionType={transaction.transactionType}
                total={transaction.amount}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
