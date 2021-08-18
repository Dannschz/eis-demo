import React, { useState } from 'react';
import { Dispatch } from '../../../Context/globalState';
import { CashBoxType } from '../../../types/sell';
import './retiro.scss';

type RetiroProps = {
  cashBox: CashBoxType;
  dispatch: Dispatch;
};

function Retiro({ cashBox, dispatch }: RetiroProps) {
  const [amountValue, setAmountValue] = useState('');
  const { initialCash, sold, withdrawalCash, deposits } = cashBox;

  const handleChangeAmountValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value > initialCash + sold - withdrawalCash) {
      setAmountValue('');
    } else {
      setAmountValue(e.currentTarget.value);
    }
  };

  const handleRetiroButton = () => {
    dispatch({ type: 'REALIZAR_RETIRO', payload: { retiro: +amountValue } });
    setAmountValue('');
  };

  // console.log(globalState.cashBox);

  return (
    <div className="inoutCommon retiroC">
      <h2>Retiro</h2>
      <span className="availableInCash">
        <p>Disponible en Caja</p>
        <p className="aic-amount">
          ${initialCash + sold - withdrawalCash + deposits}
        </p>
      </span>
      <label className="outAmount" htmlFor="outAmount">
        <span>Cantidad a retirar</span>
        <div className="outA-sep">
          <p>$</p>
          <input
            type="number"
            name="outAmount"
            id="outAmount"
            value={amountValue}
            placeholder="0.0"
            onChange={handleChangeAmountValue}
            onFocus={(e) => e.currentTarget.select()}
          />
        </div>
      </label>
      <button
        className="retiroBtn"
        type="button"
        onClick={handleRetiroButton}
        disabled={amountValue === ''}
      >
        Realizar Retiro
      </button>
    </div>
  );
}

export default Retiro;
