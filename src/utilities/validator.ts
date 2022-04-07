interface ValidateInputFormParams {
  value: string;
  type: 'username' | 'password' | 'passwordConfirmation' | 'amount' | 'payee';
  fnSetState: (value: string) => void;
  fnSetErrorMessage: (text: string) => void;
}

export function validateInputForm({ value, type, fnSetState, fnSetErrorMessage }: ValidateInputFormParams) {
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

    case 'passwordConfirmation':
      if (value === '') {
        fnSetErrorMessage('Password confirmation cannot be empty');
      } else {
        fnSetErrorMessage('');
      }

      fnSetState(value);
      break;

    case 'amount':
      if (value === '' || +value <= 0) {
        fnSetErrorMessage('Amount cannot be empty');
      } else {
        fnSetErrorMessage('');
      }

      fnSetState(value);
      break;

    case 'payee':
      if (value === '') {
        fnSetErrorMessage('Payee cannot be empty');
      } else {
        fnSetErrorMessage('');
      }

      fnSetState(value);
      break;
  }
}
