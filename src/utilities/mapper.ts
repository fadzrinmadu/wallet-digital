import { TransactionTypes, TransactionByDateTypes } from "../services/data-types";
import { dateFormatter } from './formatter';

type GroupsTypes = {
  [date: string]: TransactionTypes[]
}

export const mapTransactionsByDate = (transactions: TransactionTypes[]): TransactionByDateTypes[] => {
  const transactionsByDateGroup = transactions.reduce((groups: GroupsTypes, transaction: TransactionTypes) => {
    const date = dateFormatter(transaction.transactionDate);

    if (!groups[date]) {
      groups[date] = [];
    }

    groups[date].push(transaction);
    return groups;
  }, {});

  const transactionByDate = Object.keys(transactionsByDateGroup).map((date) => {
    return {
      date,
      transactions: transactionsByDateGroup[date]
    };
  });

  return transactionByDate;
};
