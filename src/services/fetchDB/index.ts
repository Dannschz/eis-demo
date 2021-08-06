import { PreProduct } from './../../types/inventory'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/'
    : 'https://eis-ddemo.herokuapp.com/'

type NewProductResType = {
  message: string
  productSaved: { productId: string; categoryId: string }
}

class FetchDB {
  private static instance: FetchDB

  private constructor() {}

  public static getInstance() {
    if (!FetchDB.instance) {
      FetchDB.instance = new FetchDB()
    }
    return FetchDB.instance
  }

  public async getProducts() {
    const data = await fetch(`${baseUrl}products`, {
      method: 'GET',
      mode: 'cors'
    })
    const dataString = await data.json()
    return JSON.parse(dataString.products)
  }

  public async registerNewProduct(
    product: PreProduct
  ): Promise<NewProductResType> {
    const response = await fetch(`${baseUrl}newproduct`, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors'
    })
    const { message, productSaved } = await response.json()
    return { message, productSaved }
  }
}

const fetchDB = FetchDB.getInstance()

export default fetchDB
