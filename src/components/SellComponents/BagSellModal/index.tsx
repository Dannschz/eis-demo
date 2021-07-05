/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable no-underscore-dangle */
import React, { createRef, useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../../../Context/globalState';
import { ProductBagType } from '../../../types/sell';
import './styles.global.scss';

type BagSellModalProps = {
  total: number;
  products: ProductBagType;
  handleCancelButtonFromParent: () => void;
  handleFinishSellButtonFromParent: () => void;
  handleSellDoneMessage: () => void;
};

function BagSellModal({
  total,
  products,
  handleCancelButtonFromParent,
  handleFinishSellButtonFromParent,
  handleSellDoneMessage,
}: BagSellModalProps) {
  const inputRef = createRef<HTMLInputElement>();
  const [cashIn, setCashIn] = useState('0');
  const { globalState, dispatch } = useGlobalContext();
  const finishBtnRef = useRef<HTMLButtonElement>(null);

  const handleCashInChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCashIn(e.currentTarget.value);
  };

  const handleCancelButton = () => {
    handleCancelButtonFromParent();
  };

  const handleFocus = () => {
    inputRef.current?.select();
  };

  const handleFinishSellButton = () => {
    if (Object.keys(globalState.daySales).length === 0) {
    }
    handleFinishSellButtonFromParent();
    // const date = new Date();
    /* const newSale: SaleInState = {
      folio: +Date.now().toString().substring(5),
      date,
      seller: globalState.user,
      concepts: globalState.productsToSell.toProductArray(),
      totalValue: total,
      cashReceived: Number(cashIn),
      change: Number(cashIn) - total,
    }; */
    // dispatch({ type: 'ADD_NEW_SALE', payload: { sale: newSale } });
    const newCash = globalState.cashBox.sold + total;
    dispatch({
      type: 'FINALIZE_SALE',
      payload: { newCash },
    });
    handleCancelButtonFromParent();
    handleSellDoneMessage();
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === '13' || e.key === 'Enter') {
      finishBtnRef.current?.focus();
    }
  };

  useEffect(() => {
    // console.log(globalState);
    inputRef.current?.focus();
    inputRef.current?.select();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bagSellModal">
      <h3>{`Total: $${total}`}</h3>
      <label className="efectivoM" htmlFor="efectivo">
        <span className="cashInSpan">Paga con</span>
        <p>$</p>
        <input
          ref={inputRef}
          type="number"
          name="efectivo"
          id="efectivo"
          value={cashIn}
          onChange={handleCashInChange}
          onFocus={handleFocus}
          onKeyUp={handleKeyUp}
        />
      </label>
      <span className="changeCashSpan">{`Cambio $${
        Number(cashIn) - total < 0 ? 0 : Number(cashIn) - total
      }`}</span>
      <div className="sellButtonsOption">
        <button
          className="sellOptBtn cancelButton"
          type="button"
          onClick={handleCancelButton}
        >
          Cancelar
        </button>
        <button
          ref={finishBtnRef}
          className="sellOptBtn finishSellButton"
          type="button"
          disabled={!!(Number(cashIn) - total < 0)}
          onClick={handleFinishSellButton}
          onKeyUp={(e) => {
            if (e.key === '13' || e.key === 'Enter') handleFinishSellButton();
          }}
        >
          Finalizar Venta
        </button>
      </div>
    </div>
  );
}

export default BagSellModal;
