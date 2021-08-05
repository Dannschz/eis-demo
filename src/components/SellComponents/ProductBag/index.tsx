/* eslint-disable func-names */
/* eslint-disable no-nested-ternary */
import { useEffect, useRef, useState } from 'react';
import { Tooltip, withStyles } from '@material-ui/core';
import removeIcon from '../../../img/removePB.svg';
import './styles.global.scss';
import { useGlobalContext } from '../../../Context/globalState';
import { AmountType, MeasureType } from '../../../types/inventory';

const DiscartTooltip = withStyles((theme) => ({
  tooltip: {
    fontSize: theme.typography.pxToRem(16),
    backgroundColor: '#2b3741',
  },
}))(Tooltip);

type ProductBagProps = {
  barcode: string;
  name: string;
  price: number;
  amount: number;
  amountType: string;
  measure: string;
  bagAmount: number;
};

function ProductBag({
  barcode,
  name,
  price,
  amount,
  amountType,
  measure,
  bagAmount,
}: ProductBagProps) {
  const [bagAmountValue, setBagAmountValue] = useState<string>('');
  const { dispatch } = useGlobalContext();
  const bagAmountInputRef = useRef<HTMLInputElement>(null);

  const handleChangeBagAmount = (e: React.FormEvent<HTMLInputElement>) => {
    if (
      Number(e.currentTarget.value) > amount ||
      Number(e.currentTarget.value) < 0
    ) {
      setBagAmountValue(String(0));
      dispatch({
        type: 'CHANGE_BAG_AMOUNT',
        payload: { barcode, newBagAmount: 0 },
      });
    } else {
      if (amountType === AmountType.pieza) {
        setBagAmountValue(String(Math.floor(Number(e.currentTarget.value))));
      } else {
        setBagAmountValue(e.currentTarget.value);
      }
      dispatch({
        type: 'CHANGE_BAG_AMOUNT',
        payload: { barcode, newBagAmount: Number(e.currentTarget.value) },
      });
      // changeBagAmount(barcode, Number(e.currentTarget.value));
    }
  };

  const handleRemoveProduct = () => {
    dispatch({
      type: 'REMOVE_PRODUCT_FROM_PRODUCTS_TO_SELL',
      payload: { barcode },
    });
  };

  /* const handleFocusBagAmount = () => {
    bagAmountInputRef.current?.select();
  }; */

  useEffect(() => {
    (function () {
      setBagAmountValue(bagAmount > amount ? String(0) : String(bagAmount));
      bagAmountInputRef.current?.focus();
    })();
  }, [amount, bagAmount]);

  return (
    <div className="productBagContainer">
      <div className="namePB">
        <h3>{name}</h3>
      </div>
      <span className="pricePB">
        {`$ ${measure === MeasureType.g ? price * 1000 : price}`}
        <p>{amountType === AmountType.pieza ? 'pieza' : 'kg'}</p>
      </span>
      <label className="bagAmount" htmlFor="bagAmount">
        <input
          ref={bagAmountInputRef}
          className="ba-ia"
          type="number"
          step={amountType === AmountType.pieza ? '1' : '0.001'}
          name="bagAmount"
          id="bagAmount"
          value={bagAmountValue}
          onChange={handleChangeBagAmount}
          onFocus={(e) => e.currentTarget.select()}
        />
        <p className="amountDisbaled">
          {amountType === AmountType.granel
            ? 'Kg'
            : amount > 1
            ? 'piezas'
            : 'pieza'}
        </p>
      </label>
      <span className="pricePerAmount">{`$ ${
        (measure === MeasureType.g ? price * 1000 : price) *
        Number(bagAmountValue)
      }`}</span>
      <DiscartTooltip title="Descartar" placement="top">
        <button
          type="button"
          className="removeProduct rp-hide rp-show"
          onClick={handleRemoveProduct}
        >
          <img src={removeIcon} alt="remove product" />
        </button>
      </DiscartTooltip>
    </div>
  );
}

export default ProductBag;
