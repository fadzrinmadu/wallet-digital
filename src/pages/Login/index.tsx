import './style.css';

import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { setLogin } from '../../services/auth';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [, setCookies] = useCookies(['token']);
  const history = useHistory();

  const actionLogin = async () => {
    try {
      const data = { username, password };
      const result = await setLogin(data);

      if (result.status === 'success') {
        const today = new Date();

        setCookies('token', result.token, {
          path: '/',
          expires: new Date(today.setDate(today.getDate() + 1)),
        });

        history.push('/home');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <form>
          <div className="wrapper">
            <div className="wrapper-content">
              <h1>Login</h1>
              <div className="form-group">
                <FormInput
                  text="Username"
                  field="username"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event?.target.value)}
                />
                <FormInput
                  text="Password"
                  field="password"
                  type="password"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event?.target.value)}
                />
              </div>
            </div>
            <div className="wrapper-action">
              <div className="form-button">
                <Button text="login" onClick={actionLogin} />
                <Button text="register" type="link" href="/register" isSecondary />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
