import './style.css';

import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { setLogin } from '../../services/auth';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import ErrorMessage from '../../components/ErrorMessage';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [, setCookies] = useCookies(['token']);
  const history = useHistory();

  const actionLogin = async () => {
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
      setErrorMessage(result.error);
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
                  errorMessage={usernameErrorMessage}
                  onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) =>
                      validateInputForm({
                        value: event.target.value,
                        type: 'username',
                        fnSetState: (value) => setUsername(value),
                        fnSetErrorMessage: (value) => setUsernameErrorMessage(value),
                      })
                  }
                />
                <FormInput
                  text="Password"
                  field="password"
                  type="password"
                  errorMessage={passwordErrorMessage}
                  onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) =>
                      validateInputForm({
                        value: event.target.value,
                        type: 'password',
                        fnSetState: (value) => setPassword(value),
                        fnSetErrorMessage: (value) => setPasswordErrorMessage(value),
                      })
                  }
                />
              </div>
              {errorMessage !== '' && (
                <ErrorMessage type="error" message={errorMessage} />
              )}
            </div>
            <div className="wrapper-action">
              <div className="form-button">
                <Button text="login" onClick={actionLogin} isDisabled={!(username && password)} />
                <Button text="register" type="link" href="/register" isSecondary />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

interface ValidateInputFormParams {
  value: string;
  type: 'username' | 'password';
  fnSetState: (value: string) => void;
  fnSetErrorMessage: (text: string) => void;
}

function validateInputForm({ value, type, fnSetState, fnSetErrorMessage }: ValidateInputFormParams) {
  switch (type) {
    case 'username':
      if (value === '') {
        fnSetErrorMessage('Username cannot be empty');
      } else {
        fnSetErrorMessage('');
      }

      fnSetState(value);
      break;
    case 'password':
      if (value === '') {
        fnSetErrorMessage('Password cannot be empty');
      } else {
        fnSetErrorMessage('');
      }

      fnSetState(value);
      break;
  }
}
