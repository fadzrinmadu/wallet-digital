import { numberFormatter } from '../../utilities';

interface TransactionItemProps {
  accountName: string;
  accountNumber: string;
  total: number;
  transactionType: string;
}

export default function TransactionItem(props: TransactionItemProps) {
  const {
    accountName,
    accountNumber,
    total,
    transactionType,
  } = props;

  return (
    <div className="transaction-item">
      <div className="transaction-data">
        <div className="account-name">{accountName}</div>
        <div className="account-number">{accountNumber}</div>
      </div>
      <div>
        <div className={`transaction-total ${transactionType === 'received' && 'plus'}`}>
          {transactionType === 'received' ? numberFormatter(total) : `-${numberFormatter(total)}`}
        </div>
      </div>
    </div>
  );
}
