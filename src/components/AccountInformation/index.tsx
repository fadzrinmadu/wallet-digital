import './style.css';

import { useCallback, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { getBalance } from '../../services/balance';
import { currencyFormatter } from '../../utilities';
import { BalanceType } from '../../services/data-types';

export default function AccountInformation() {
  const [cookies] = useCookies(['token']);

  const [userBalance, setUserBalance] = useState<BalanceType>({
    status: '',
    accountNo: '',
    balance: 0,
  });

  const fetchUserBalance = useCallback(async () => {
    const result = await getBalance(cookies.token);

    setUserBalance({
      status: result.status,
      accountNo: result.accountNo,
      balance: result.balance,
    });
  }, [cookies.token]);

  useEffect(() => {
    fetchUserBalance();
  }, [fetchUserBalance]);

  return (
    <div className="account">
      <h2>You have</h2>
      <div className="account-money">{currencyFormatter(userBalance.balance)}</div>
      <ul className="account-details">
        <li>
          <p>Account No</p>
          <p>{userBalance.accountNo}</p>
        </li>
        <li>
          <p>Account Holder</p>
          <p>Donald Trump</p>
        </li>
      </ul>
    </div>
  );
}
