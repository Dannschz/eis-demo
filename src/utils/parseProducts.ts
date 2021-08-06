import { CategoryArray, CategoryT, ProductT } from './../types/inventory'

export default function parseProducts(categories: CategoryArray[]) {
  const catMap = new Map<string, CategoryT>()
  const productsMap = new Map<string, ProductT>()

  categories.forEach((cat) => {
    const newProductsMap = new Map<string, ProductT>()
    cat.products.forEach((p) => {
      productsMap.set(p.barcode, p)
      newProductsMap.set(p.barcode, p)
    })
    catMap.set(cat._id, {
      _id: cat._id,
      name: cat.name,
      products: newProductsMap
    })
  })
  return { catMap, productsMap }
}
