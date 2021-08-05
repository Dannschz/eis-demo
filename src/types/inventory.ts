/* eslint-disable @typescript-eslint/no-explicit-any */
export enum AmountType {
  pieza = 'pieza',
  granel = 'granel',
}

export enum MeasureType {
  kg = 'kg',
  g = 'g',
  default = '',
}

export type PreProduct = {
  barcode: number | string;
  name: string;
  amountType: string;
  amount: number | string;
  measure: string;
  price: number | string;
  soldPieces: number;
  categoryType: string;
  categoryName: string;
};

export type ProductT = {
  _id: string;
  barcode: string;
  name: string;
  amountType: string;
  amount: number;
  measure: string;
  price: number;
  soldPieces: number;
};

/* type CatMapMethods = {
  get(key: any): CategoryT;
  set(key: string, value: CategoryT): Map<any, any>;
}; */

/* type ProductMapMethods = {
  get(key: string): ProductT;
  set(key: string, value: ProductT): Map<any, any>;
  delete(key: string): boolean;
}; */

export type ProductMap = Map<string, ProductT>;

export type CategoryT = {
  _id: string;
  name: string;
  products: ProductMap;
};

export type CategoryArray = {
  _id: string;
  name: string;
  products: ProductT[];
}

export type CategoryMap = Map<string, CategoryT>

export type EditModal = {
  showModal: boolean;
  product: {
    productId: string;
    barcode: string;
    name: string;
    amount: number;
    amountType: string;
    price: number;
    categoryId: string;
  };
};

export type BarcodeType = {
  name: string;
  barcode: string;
};

export type BarcodesArray = Array<BarcodeType | null>;
