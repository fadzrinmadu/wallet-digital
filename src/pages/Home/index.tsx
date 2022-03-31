import './style.css';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import AccountInformation from '../../components/AccountInformation';
import Button from '../../components/Button';
import TransactionsHistory from '../../components/TransactionHistory';

type HomeProps = {
  props: string
}

export default function Home({ props }: HomeProps) {
  const [, , removeCookie] = useCookies(['token']);
  const history = useHistory();

  const actionLogout = (event: any) => {
    event.preventDefault();
    removeCookie('token');
    return history.push('/');
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
