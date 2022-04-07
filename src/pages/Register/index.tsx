import './style.css';

import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { setRegister } from '../../services/auth';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import ArrowBack from '../../components/ArrowBack';
import { validateInputForm } from '../../utilities';
import ErrorMessage from '../../components/ErrorMessage';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [passwordConfirmationErrorMessage, setPasswordConfirmationErrorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [, setCookies] = useCookies(['token']);
  const history = useHistory();

  const actionRegister = async () => {
    const data = { username, password };
    const result = await setRegister(data);

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
    <div className="register">
      <div className="container">
        <form>
          <div className="wrapper">
            <div className="wrapper-content">
              <ArrowBack path="/" />
              <h1>Register</h1>
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
                        fnSetState: (value: string) => setUsername(value),
                        fnSetErrorMessage: (value: string) => setUsernameErrorMessage(value),
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
                        fnSetState: (value: string) => setPassword(value),
                        fnSetErrorMessage: (value: string) => setPasswordErrorMessage(value),
                      })
                  }
                />
                <FormInput
                  text="Confirm Password"
                  field="passwordConfirmation"
                  type="password"
                  errorMessage={passwordConfirmationErrorMessage}
                  onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) =>
                      validateInputForm({
                        value: event.target.value,
                        type: 'passwordConfirmation',
                        fnSetState: (value: string) => setPasswordConfirmation(value),
                        fnSetErrorMessage: (value: string) => setPasswordConfirmationErrorMessage(value),
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
                <Button
                  text="register"
                  onClick={actionRegister}
                  isDisabled={!(username && password && passwordConfirmation)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
