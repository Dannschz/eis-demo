/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-autofocus */
import { useState, useEffect } from 'react';
import ShoppingBag from '../../SellComponents/ShoppingBag';
import { useGlobalContext } from '../../../Context/globalState';
import ProfileNav from '../ProfileNav';
import './styles.global.scss';

type ScanCode = {
  detail: { qty: number; scanCode: string };
};

function SalesSection() {
  // const [productNameValue, setProductName] = useState('');
  const { globalState, dispatch } = useGlobalContext();
  const [barcodeValue, setBarcodeValue] = useState('');

  const handleBarcodeInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setBarcodeValue(e.currentTarget.value);
  };

  const productToPush = (barcode: string) => {
    const existentProduct = globalState.products.get(barcode);
    if (existentProduct) {
      // const {_id, name, barcode, amount, amountType, price} = existentProduct;
      if (globalState.productsToSell.products[barcode]) {
        dispatch({
          type: 'ADD_ONE_TO_BAG_AMOUNT',
          payload: { barcode },
        });
      } else {
        console.log('nuevo producto');
        dispatch({
          type: 'ADD_PRODUCT_TO_SELL',
          payload: { barcode, product: { ...existentProduct, bagAmount: 1 } },
        });
      }
    } else {
      console.log('No se encontro el producto con ese código de barras');
    }
  };

  const onEnterBarcodeInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === '13') {
      productToPush(barcodeValue);
      setBarcodeValue('');
    }
  };

  const scanCallback = (scanCode: ScanCode) => {
    productToPush(scanCode.detail.scanCode);
  };

  useEffect(() => {
  }, []);

  return (
    <section className="section homeSellSection">
      <ProfileNav />
      <input
        style={{ marginBottom: '1em', marginTop: '1em' }}
        type="text"
        value={barcodeValue}
        onChange={handleBarcodeInputChange}
        onKeyUp={onEnterBarcodeInput}
      />
      <ShoppingBag
        productsToSell={globalState.productsToSell}
        dispatch={dispatch}
      />
    </section>
  );
}

export default SalesSection;
