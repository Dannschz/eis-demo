import { useState } from 'react'
import { useGlobalContext } from '../../../Context/globalState'
import { ProductT } from '../../../types/inventory'
// import CategoryFilter from '../CategoryFilter';
import Product from '../Product'
import SearchField from '../SearchField'
import './styles.scss'

type ProductListProps = {
  showOptions?: boolean
  entryProduct?: boolean
}

function ProductList({
  showOptions = false,
  entryProduct = true
}: ProductListProps) {
  const { globalState } = useGlobalContext()
  const [searchValue, setSearchValue] = useState('')
  const [categoryId, setCategoryId] = useState('')

  const regexp = new RegExp(`\\b${searchValue}`, 'i')

  const handleSearchValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  /* const handleCategoryValueChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategoryId(e.currentTarget.value);
  }; */

  return (
    <>
      <div className='searchAndFilter'>
        <SearchField
          searchValue={searchValue}
          handleSearchValueChange={handleSearchValueChange}
        />
        {/* <CategoryFilter
          categories={categories}
          handleCategoryChange={handleCategoryValueChange}
        /> */}
      </div>
      <div className='ProductList'>
        <div
          className={`ProductListHeader ${
            showOptions ? 'showOpts' : 'hideOpts'
          }`}
        >
          <div className='barC'>
            <span className='bar'></span>
          </div>
          <span>Descripción</span>
          <span>Categoría</span>
          <span>Código</span>
          <span>Precio (pieza/kg)</span>
          <span>Existencia</span>
          {showOptions && (
            <>
              <div className='bulto'></div>
              <div className='bulto'></div>
            </>
          )}
        </div>
        {categoryId === ''
          ? Array.from(globalState.categories.values()).map((cat) => {
              return Array.from(cat.products.values()).map((p: ProductT) => {
                return regexp?.test(`${p.name} ${p.barcode}`) ? (
                  <Product
                    key={p._id}
                    productId={p._id}
                    barcode={p.barcode}
                    name={p.name}
                    amount={p.amount}
                    amountType={p.amountType}
                    measure={p.measure}
                    price={p.price}
                    soldPieces={p.soldPieces}
                    categoryId={cat._id}
                    categoryName={cat.name}
                    showEAD={showOptions}
                    entryProduct={entryProduct}
                  />
                ) : null
              })
            })
          : Array.from(globalState.products.values()).map((p: ProductT) => {
              return regexp?.test(`${p.name} ${p.barcode}`) ? (
                <Product
                  key={p._id}
                  productId={p._id}
                  barcode={p.barcode}
                  name={p.name}
                  amount={p.amount}
                  amountType={p.amountType}
                  measure={p.measure}
                  price={p.price}
                  soldPieces={p.soldPieces}
                  categoryId={globalState.categories.get(categoryId)?._id}
                  showEAD={showOptions}
                  entryProduct={entryProduct}
                />
              ) : null
            })}
        {}
      </div>
    </>
  )
}

export default ProductList
