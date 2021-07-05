/* eslint-disable no-underscore-dangle */
import {
  CategoryMap,
  CategoryT,
  EditModal,
  ProductMap,
  ProductT,
} from '../types/inventory';

export type InventoryState = {
  categories: CategoryMap;
  products: ProductMap;
  editModal: EditModal;
};

export type InventoryAction =
  | { type: 'DELETE_CATEGORY' }
  | {
      type: 'SET_INITIAL_INVENTORY_STATE';
      payload: {
        catMap: CategoryMap;
        productMap: ProductMap;
      };
    }
  | {
      type: 'NEW_PRODUCT_REGISTER';
      categoryId: string;
      payload: ProductT;
    }
  | {
      type: 'NEW_CATEGORY_REGISTER';
      categoryId: string;
      payload: { newCategory: CategoryT; products: ProductMap };
    }
  | {
      type: 'DELETE_PRODUCT';
      payload: { categoryId: string; productBarcode: string };
    }
  | { type: 'SHOW_EDIT_MODAL'; payload: EditModal }
  | { type: 'CLOSE_EDIT_MODAL'; payload: boolean }
  | {
      type: 'UPDATE_PRODUCT';
      payload: {
        newProduct: {
          _id: string;
          barcode: string;
          name: string;
          amount: number;
          amountType: string;
          measure: string;
          price: number;
          soldPieces: number;
        };
        categoryId: string;
        productBarcode: string;
      };
    }
  | {
      type: 'UPDATE_AMOUNT_PRODUCTS';
      payload: { catMap: CategoryMap; products: ProductMap };
    }
  | {
      type: 'UPDATE_AMOUNT_PRODUCT_ENTRY';
      payload: {
        product: ProductT;
        productBarcode: string;
        categoryId: string;
      };
    };
