import './style.css';

import { MouseEvent } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import AccountInformation from '../../components/AccountInformation';
import TransactionsHistory from '../../components/TransactionHistory';

export default function Home() {
  const [, , removeCookie] = useCookies(['token']);
  const history = useHistory();

  const actionLogout = (event: MouseEvent) => {
    event.preventDefault();
    removeCookie('token');
    history.push('/');
  };

  return (
    <div className="home">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-content">
            <a className="logout" href="/#" onClick={actionLogout}>Logout</a>
            <AccountInformation />
            <TransactionsHistory />
          </div>
          <div className="wrapper-action">
            <Button text="Make Transfer" type="link" href="/transfer" isButtonHome />
          </div>
        </div>
      </div>
    </div >
  );
}
