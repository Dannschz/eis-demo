import { CategoryMap } from './../types/inventory'
export default function getCategoryID(
  categories: CategoryMap,
  catName: string
): string | undefined {
  const cat = Array.from(categories.values()).find((cat) => {
    return cat.name === catName
  })
  return cat?._id
}
