import { SaleTypeMongoose, SaleType } from '../../types/sell'
import { PreProduct } from '../../types/inventory'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://eis-ddemo.herokuapp.com'

type NewProductResType = {
  message: string
  productSaved: { productId: string; categoryId: string }
}

class FetchInventoryDB {
  private static instance: FetchInventoryDB

  private constructor() {}

  public static getInstance() {
    if (!FetchInventoryDB.instance) {
      FetchInventoryDB.instance = new FetchInventoryDB()
    }
    return FetchInventoryDB.instance
  }

  public async getProducts() {
    const data = await fetch(`${baseUrl}/products`, {
      method: 'GET',
      mode: 'cors'
    })
    const dataString = await data.json()
    return JSON.parse(dataString.products)
  }

  public async registerNewProduct(
    product: PreProduct
  ): Promise<NewProductResType> {
    const response = await fetch(`${baseUrl}/newproduct`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    })
    const { message, productSaved } = await response.json()
    return { message, productSaved }
  }

  public async registerNewSale(sale: SaleTypeMongoose): Promise<Response> {
    const response = await fetch(`${baseUrl}/newsale`, {
      method: 'POST',
      body: JSON.stringify(sale),
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    })
    return response
  }

  public async getDaySales(): Promise<SaleType[] | []> {
    const response = await fetch(`${baseUrl}/todaysales`, {
      method: 'GET',
      mode: 'cors'
    })
    if (response.status === 200) {
      const data = await response.json()
      return JSON.parse(data.sales)
    }
    return []
  }

  public async getMonthSales(month: number): Promise<SaleType[] | []> {
    const response = await fetch(`${baseUrl}/monthsales/${month}`, {
      method: 'GET',
      mode: 'cors'
    })
    if (response.status === 200) {
      const data = await response.json()
      return JSON.parse(data.sales)
    }
    return []
  }

  public async deteleProduct({
    categoryID,
    productID,
    productBarcode
  }: {
    categoryID: string
    productID: string
    productBarcode: string
  }) {
    const response = await fetch(`${baseUrl}/deleteproduct`, {
      method: 'PUT',
      body: JSON.stringify({ categoryID, productID, productBarcode }),
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    })

    return response
  }
}

const fetchInventoryDB = FetchInventoryDB.getInstance()

export default fetchInventoryDB
