import { DaySalesObject, SaleInState } from '../types/sell';

export type SalesState = {
  daySales: DaySalesObject;
};

export type SalesAction =
  | {
      type: 'ADD_NEW_SALE';
      payload: { sale: SaleInState };
    }
  | { type: 'CLEAN_SALES' };
