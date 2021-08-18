import React, { useEffect } from 'react'
import { inventario } from '../../../utils/strRoutes'
// import { useGlobalContext } from '../../../Context/globalState';
import BackButtonLink from '../../Utils/BackButtonLink/BackButtonLink'
import ProductList from '../ProductList'
import './eps.scss'

function EntryProductSection() {
  // const { dispatch } = useGlobalContext();

  useEffect(() => {}, [])

  return (
    <div className='entryProductSection'>
      <BackButtonLink to={inventario} />
      <h2 className='entryTitle'>Entrada de Mercancía</h2>
      <ProductList />
    </div>
  )
}

export default EntryProductSection
