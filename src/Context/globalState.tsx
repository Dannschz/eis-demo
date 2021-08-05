/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
import React, { useContext, useReducer } from 'react'
import { ProductBagClass } from '../types/sell'
import { CashBoxState, CashboxAction } from './cashbox'
import { InventoryState, InventoryAction } from './inventory'
import { SalesAction, SalesState } from './sales'
import { UserProfileAction, UserProfileState } from './user'

export type GlobalState = InventoryState &
  CashBoxState &
  UserProfileState &
  SalesState
type Action = InventoryAction | CashboxAction | UserProfileAction | SalesAction

type Dispatch = (action: Action) => void

type ProviderProps = { children: React.ReactNode }

const GlobalStateContext = React.createContext<
  | {
      globalState: GlobalState
      dispatch: Dispatch
    }
  | undefined
>(undefined)

function globalReducer(state: GlobalState, action: Action) {
  switch (action.type) {
    // Inventory
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories
      }
    case 'SET_INITIAL_INVENTORY_STATE':
      state.categories = action.payload.catMap
      state.products = action.payload.productMap
      return {
        ...state
      }
    case 'NEW_PRODUCT_REGISTER':
      state.categories
        .get(action.categoryId)
        ?.products.set(action.payload.barcode, action.payload)
      state.products.set(action.payload.barcode, action.payload)
      return {
        ...state
      }
    case 'NEW_CATEGORY_REGISTER':
      state.categories.set(action.categoryId, action.payload.newCategory)
      state.products = action.payload.products
      return {
        ...state
      }
    case 'DELETE_PRODUCT':
      state.categories
        .get(action.payload.categoryId)
        ?.products.delete(action.payload.productBarcode)
      state.products.delete(action.payload.productBarcode)
      return { ...state }
    case 'SHOW_EDIT_MODAL':
      state.editModal = action.payload
      return state
    case 'CLOSE_EDIT_MODAL':
      return {
        ...state,
        editModal: {
          showModal: action.payload,
          product: state.editModal.product
        }
      }
    case 'UPDATE_PRODUCT':
      state.categories
        .get(action.payload.categoryId)
        ?.products.set(action.payload.productBarcode, action.payload.newProduct)
      state.products.set(
        action.payload.productBarcode,
        action.payload.newProduct
      )
      return {
        ...state
      }
    case 'UPDATE_AMOUNT_PRODUCTS':
      state.categories = action.payload.catMap
      state.products = action.payload.products
      return { ...state }
    case 'UPDATE_AMOUNT_PRODUCT_ENTRY':
      state.categories
        .get(action.payload.categoryId)
        ?.products.set(action.payload.productBarcode, action.payload.product)
      state.products.set(action.payload.productBarcode, action.payload.product)
      return { ...state }
    // cashbox
    case 'SET_INITIAL_CASHBOX_STATE':
      state.cashBox = action.payload.cashBox
      return { ...state }
    case 'FINALIZE_SALE':
      state.cashBox.sold = action.payload.newCash
      state.productsToSell = new ProductBagClass()
      return { ...state }
    case 'CLEAN_BAG':
      state.productsToSell = new ProductBagClass()
      return { ...state }
    case 'ADD_ONE_TO_BAG_AMOUNT':
      state.productsToSell.products[action.payload.barcode].bagAmount += 1
      return { ...state }
    case 'REALIZAR_RETIRO':
      state.cashBox.withdrawalCash = action.payload.retiro
      return { ...state }
    case 'REALIZAR_DEPOSITO':
      state.cashBox.deposits = action.payload.deposito
      return { ...state }
    /* case 'SUBTRACT_ONE_TO_BAG_AMOUNT':
      state.productsToSell.products[action.payload.barcode].bagAmount -= 1;
      return { ...state }; */
    case 'ADD_PRODUCT_TO_SELL':
      state.productsToSell.products[action.payload.barcode] =
        action.payload.product
      return { ...state }
    case 'CHANGE_BAG_AMOUNT':
      state.productsToSell.products[action.payload.barcode].bagAmount =
        action.payload.newBagAmount
      return { ...state }
    case 'REMOVE_PRODUCT_FROM_PRODUCTS_TO_SELL':
      delete state.productsToSell.products[action.payload.barcode]
      return { ...state }
    // User profile
    case 'LOGIN':
      state.user = action.payload.user
      return { ...state }
    case 'LOGOUT':
      state.user = { id: '', userName: '', rol: 'UNDEFINED' }
      return { ...state }
    // sales Actions
    case 'ADD_NEW_SALE':
      state.daySales[action.payload.sale.folio] = action.payload.sale
      return { ...state }
    case 'CLEAN_SALES':
      state.daySales = {}
      return { ...state }
    default:
      return state
  }
}

function GlobalProvider({ children }: ProviderProps) {
  const initialState: GlobalState = {
    categories: new Map(),
    products: new Map(),
    editModal: {
      showModal: false,
      product: {
        productId: '',
        barcode: '',
        name: '',
        amount: 0,
        amountType: '',
        price: 0,
        categoryId: ''
      }
    },
    cashBox: {
      initialCash: 0,
      sold: 0,
      withdrawalCash: 0,
      deposits: 0
    },
    daySales: {},
    productsToSell: new ProductBagClass(),
    user: {
      _id: '1234',
      id: '1234',
      userName: 'daniel',
      rol: 'ADMIN',
      password: ''
    }
  }
  const [globalState, dispatch] = useReducer(globalReducer, initialState)

  return (
    <GlobalStateContext.Provider value={{ globalState, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

function useGlobalContext() {
  const context = useContext(GlobalStateContext)
  if (context === undefined) {
    throw new Error('useGlobalContext debe ser usado dentro de GlobalProvider')
  }
  return context
}

export { GlobalProvider, useGlobalContext }
export type { Dispatch }
