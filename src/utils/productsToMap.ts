import { CategoryArray, CategoryT, ProductT } from '../types/inventory'

export default function productsToMap(data: CategoryArray[]) {
  const catMap = new Map<string, CategoryT>()
  const productsCatMap = new Map<string, ProductT>()
  data.forEach((cat) => {
    const productsMap = new Map<string, ProductT>()
    cat.products.forEach((p) => {
      productsMap.set(p.barcode, p)
      productsCatMap.set(p.barcode, p)
    })
    catMap.set(cat._id, {
      _id: cat._id,
      name: cat.name,
      products: productsMap
    })
  })
  return { catMap, productsCatMap }
}
