export interface SenderTypes {
  accountHolder: string;
  accountNo: string;
}

export interface ReceipientTypes {
  accountHolder: string;
  accountNo: string;
}

export interface AccountTypes {
  accountHolder: string;
  accountNo: string;
}

export interface TransactionTypes {
  amount: number;
  description: string;
  transactionDate: string;
  transactionId: string;
  transactionType: string;
  sender: AccountTypes;
  receipient: AccountTypes;
}

export interface TransactionByDateTypes {
  date: string;
  transactions: TransactionTypes[];
}

export interface BalanceType {
  status: string;
  accountNo: string;
  balance: number;
}

export interface PayeeType {
  id: string;
  name: string;
  accountNo: string;
}

export interface TransferTypes {
  receipientAccountNo: string;
  amount: number;
  description: string;
}
