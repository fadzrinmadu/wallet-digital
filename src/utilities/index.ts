import { TransactionTypes, TransactionByDateTypes } from "../services/data-types";

export const currencyFormatter = (num: number) => {
  const formatter = new Intl.NumberFormat('en-sg', {
    style: 'currency',
    currency: 'SGD',
    currencyDisplay: 'code',
  });

  return formatter.format(num);
};

export const numberFormatter = (num: number) => {
  const formatter = new Intl.NumberFormat('en-us', {
    minimumFractionDigits: 2,
  });
  return formatter.format(num);
};

export const dateFormatter = (date: string) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const partialDate = new Date(date.split('T')[0]);

  const day = partialDate.getDate();
  const month = months[partialDate.getMonth()];
  const year = partialDate.getFullYear();

  return `${day} ${month} ${year}`;
}

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
