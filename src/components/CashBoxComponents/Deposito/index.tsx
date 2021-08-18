import React, { useState } from 'react';
import { Dispatch, useGlobalContext } from '../../../Context/globalState';
import './deposito.scss';

type DepositoProps = {
  dispatch: Dispatch;
};

function Deposito({ dispatch }: DepositoProps) {
  const [amountValue, setAmountValue] = useState('');
  /* const {
    initialCash,
    sold,
    withdrawalCash,
  } = useGlobalContext().globalState.cashBox; */

  const handleDepoClick = () => {
    dispatch({
      type: 'REALIZAR_DEPOSITO',
      payload: { deposito: +amountValue },
    });
    setAmountValue('');
  };

  return (
    <div className="inoutCommon depositoC">
      <h2>Depósito</h2>
      <label className="outAmount" htmlFor="inAmount">
        <span>Cantidad a depositar</span>
        <div className="outA-sep">
          <p>$</p>
          <input
            type="number"
            name="inAmount"
            id="inAmount"
            placeholder="0.0"
            value={amountValue}
            onChange={(e) => setAmountValue(e.currentTarget.value)}
          />
        </div>
      </label>
      <button
        className="depositoBtn"
        type="button"
        onClick={handleDepoClick}
        disabled={amountValue === ''}
      >
        Realizar Depósito
      </button>
    </div>
  );
}

export default Deposito;
