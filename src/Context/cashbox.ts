import { CashBoxType, ProductBagClass, ProductToSellType } from '../types/sell';

export type CashBoxState = {
  cashBox: CashBoxType;
  productsToSell: ProductBagClass;
};

export type CashboxAction =
  | {
      type: 'SET_INITIAL_CASHBOX_STATE';
      payload: { cashBox: CashBoxType };
    }
  | { type: 'FINALIZE_SALE'; payload: { newCash: number } }
  | { type: 'CLEAN_BAG' }
  | { type: 'ADD_ONE_TO_BAG_AMOUNT'; payload: { barcode: string } }
  | { type: 'SUBTRACT_ONE_TO_BAG_AMOUNT'; payload: { barcode: string } }
  | {
      type: 'CHANGE_BAG_AMOUNT';
      payload: { barcode: string; newBagAmount: number };
    }
  | {
      type: 'ADD_PRODUCT_TO_SELL';
      payload: { barcode: string; product: ProductToSellType };
    }
  | {
      type: 'REMOVE_PRODUCT_FROM_PRODUCTS_TO_SELL';
      payload: { barcode: string };
    }
  | { type: 'REALIZAR_RETIRO'; payload: { retiro: number } }
  | { type: 'REALIZAR_DEPOSITO'; payload: { deposito: number } };
