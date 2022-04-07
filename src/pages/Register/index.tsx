import './style.css';

import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { setRegister } from '../../services/auth';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import ArrowBack from '../../components/ArrowBack';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [, setCookies] = useCookies(['token']);
  const history = useHistory();

  const actionRegister = async () => {
    try {
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
        throw new Error(result.error);
      }
    } catch (error) {
      console.log(error);
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
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event?.target.value)}
                />
                <FormInput
                  text="Password"
                  field="password"
                  type="password"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event?.target.value)}
                />
                <FormInput
                  text="Confirm Password"
                  field="password2"
                  type="password"
                />
              </div>
            </div>
            <div className="wrapper-action">
              <div className="form-button">
                <Button
                  text="register"
                  onClick={actionRegister}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
