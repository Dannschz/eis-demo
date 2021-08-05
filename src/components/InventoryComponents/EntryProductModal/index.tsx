/* eslint-disable react/require-default-props */
import { createRef, useEffect, useState } from 'react';
import { AmountType } from '../../../types/inventory';
import './entryModal.global.scss';

type EntryProductModalProps = {
  id: string;
  barcode: string;
  name: string;
  amount: number;
  amountType: string;
  measure: string;
  price: number;
  soldPieces: number;
  categoryId: string;
  entryProduct?: boolean;
  handleCancelButtonFromParent: () => void;
};

function EntryProductModal({
  id,
  barcode,
  name,
  amount,
  amountType,
  measure,
  price,
  soldPieces,
  categoryId,
  handleCancelButtonFromParent,
  entryProduct,
}: EntryProductModalProps) {
  const [amountValue, setAmountValue] = useState('0');
  const amountRef = createRef<HTMLInputElement>();

  const handleAmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAmountValue(e.currentTarget.value);
  };

  const focusAndSelectAmount = () => {
    amountRef.current?.focus();
    amountRef.current?.select();
  };

  const handleCancelButton = () => {
    handleCancelButtonFromParent();
  };

  const handleAddButton = () => {
    setTimeout(() => {
      handleCancelButtonFromParent();
    }, 200);
  };

  useEffect(() => {
    focusAndSelectAmount();
  }, []);

  return (
    <div className="entryProductModal">
      <h2>{`Producto: ${name}`}</h2>
      <label htmlFor="entryAmount">
        <span>Cantidad a {entryProduct ? 'agregar' : 'retirar'}:</span>
        <input
          className="amountEntryInput"
          ref={amountRef}
          type="number"
          name="amount"
          id="entryAmount"
          placeholder="0"
          value={amountValue}
          onChange={handleAmountChange}
        />
        <span className="pog">
          {amountType === AmountType.pieza ? 'pieza(s)' : 'kg'}
        </span>
      </label>
      <div className="buttonsOption">
        <button
          className="btnE btnCancel"
          type="button"
          onClick={handleCancelButton}
        >
          Cancelar
        </button>
        <button
          className="btnE btnAdd"
          type="button"
          disabled={Number(amountValue) <= 0}
          onClick={handleAddButton}
        >
          {entryProduct ? 'Agregar' : 'Retirar'}
        </button>
      </div>
    </div>
  );
}

export default EntryProductModal;
