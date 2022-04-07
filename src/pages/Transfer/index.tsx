import React, { useCallback, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import FormArea from '../../components/FormArea';
import ArrowBack from '../../components/ArrowBack';
import FormSelect from '../../components/FormSelect';
import { getPayees } from '../../services/payee';
import { PayeeType, TransferTypes } from '../../services/data-types';
import { postTransfer } from '../../services/transfer';
import { useHistory } from 'react-router-dom';

export default function Transfer() {
  const history = useHistory();
  const [cookies] = useCookies(['token']);

  const [payees, setPayees] = useState<PayeeType[]>([]);
  const [transfer, setTransfer] = useState<TransferTypes>({
    receipientAccountNo: '',
    amount: 0,
    description: '',
  });

  const transferAction = async () => {
    try {
      const result = await postTransfer(cookies.token, transfer);

      console.log(transfer);
      debugger;

      if (result.status === 'success') {
        history.push('/home');
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataPayees = useCallback(async () => {
    const result = await getPayees(cookies.token);
    setPayees(result.data);
  }, [cookies.token]);

  useEffect(() => {
    fetchDataPayees();
  }, [fetchDataPayees]);

  return (
    <div className="transfer">
      <div className="container">
        <form>
          <div className="wrapper">
            <div className="wrapper-content">
              <ArrowBack path="/home" />
              <h1>Transfer</h1>
              <div className="form-group">
                <FormSelect
                  text="Payee"
                  field="payee"
                  data={payees}
                  value={transfer.receipientAccountNo}
                  onChange={
                    (event: React.ChangeEvent<HTMLSelectElement>) =>
                      setTransfer({ ...transfer, receipientAccountNo: event.target.value })
                  }
                />
                <FormInput
                  text="Amount"
                  field="amount"
                  type="number"
                  defaultValue={transfer.amount}
                  onChange={
                    (event: React.ChangeEvent<HTMLInputElement>) =>
                      setTransfer({ ...transfer, amount: +event.target.value })
                  }
                />
                <FormArea
                  text="Description"
                  field="description"
                  value={transfer.description}
                  onChange={
                    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setTransfer({ ...transfer, description: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="wrapper-action">
              <div className="form-button">
                <Button text="transfer now" onClick={transferAction} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
