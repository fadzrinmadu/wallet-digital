import React from 'react'

import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import FormArea from '../../components/FormArea';
import ArrowBack from '../../components/ArrowBack';

export default function Transfer() {
  return (
    <div className="transfer">
      <div className="container">
        <form>
          <div className="wrapper">
            <div className="wrapper-content">
              <ArrowBack path="/home" />
              <h1>Transfer</h1>
              <div className="form-group">
                <FormInput text="Payee" field="payee" />
                <FormInput text="Amount" field="amount" />
                <FormArea text="Description" field="description" />
              </div>
            </div>
            <div className="wrapper-action">
              <div className="form-button">
                <Button text="transfer now" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
