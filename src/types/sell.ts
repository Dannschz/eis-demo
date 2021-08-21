/* eslint-disable no-underscore-dangle */
import { UserProfileType } from './userprofile'
import { MeasureType, ProductT } from './inventory'

export type CashBoxType = {
  initialCash: number
  sold: number
  withdrawalCash: number
  deposits: number
}

export type ProductToSellType = ProductT & { bagAmount: number }

export type ProductBagType = {
  [key: string]: ProductToSellType
}

export class ProductBagClass {
  products: ProductBagType

  constructor() {
    this.products = {}
  }

  getTotal(): number {
    let total = 0
    Object.values(this.products).forEach((p) => {
      total +=
        p.measure === MeasureType.g
          ? p.price * 1000 * p.bagAmount
          : p.price * p.bagAmount
    })
    return total
  }

  toProductArray(): ConceptType[] {
    return Object.values(this.products).map(
      ({
        _id,
        barcode,
        name,
        amount,
        amountType,
        price,
        soldPieces,
        measure,
        bagAmount
      }) => {
        const product: ProductT = {
          _id,
          barcode,
          name,
          amount,
          amountType,
          price,
          soldPieces,
          measure
        }
        return { product, bagAmount }
      }
    )
  }
}

/* type ConceptTypeMongoose = {
  product: string
  amount: number
} */

export interface SaleTypeMongoose {
  folio: number
  date?: Date
  seller: string
  concepts: ConceptType[]
  totalValue: number
  cashReceived: number
  change: number
}

export type ConceptType = {
  product: ProductT
  bagAmount: number
}

export type SaleType = {
  _id: string
  folio: number
  date: Date | string
  seller: Omit<UserProfileType, 'password'>
  concepts: ConceptType[]
  totalValue: number
  cashReceived: number
  change: number
}

export type SaleInState = Omit<SaleType, '_id'>

export type DaySalesObject = {
  [key: string]: SaleInState
}
