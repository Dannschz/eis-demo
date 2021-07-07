import { useEffect } from 'react'
import NavLinkMenu from '../../components/Utils/NavLinkMenu'
import entradasIcon from '../../img/entradas.svg'
import salidasIcon from '../../img/salidas.svg'
import addIcon from '../../img/addProduct.svg'
import editIcon from '../../img/editProduct.svg'
import barcodeIcon from '../../img/genBarcode.svg'
import { NavLinksMenuType } from '../../types/global'
import InventoryState from '../../components/InventoryComponents/InventoryState'
import './inventario.scss'
import { useGlobalContext } from '../../Context/globalState'
import productsToMap from '../../utils/productsToMap'

function Inventario() {
  const { globalState, dispatch } = useGlobalContext()

  const inventoryMenu: NavLinksMenuType = [
    {
      to: '/inventario/registrar',
      title: 'Registrar',
      imgPath: addIcon,
      rol: 'ADMIN'
    },
    {
      to: '/inventario/entradas',
      title: 'Entradas',
      imgPath: entradasIcon,
      rol: 'ADMIN'
    },
    {
      to: '/inventario/salidas',
      title: 'Salidas',
      imgPath: salidasIcon,
      rol: 'ADMIN'
    },
    {
      to: '/inventario/editar',
      title: 'Editar',
      imgPath: editIcon,
      rol: 'ADMIN'
    },
    {
      to: '/inventario/códigos',
      title: 'Códigos',
      imgPath: barcodeIcon,
      rol: 'ADMIN'
    }
  ]

  const fetchProducts = async () => {
    if (globalState.products.size > 0) return
    const uri =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000/products'
        : 'https://eis-ddemo.herokuapp.com/products'
    const response = await fetch(uri, {
      method: 'GET',
      mode: 'cors'
    })
    const { products } = await response.json()
    const { catMap, productsCatMap } = productsToMap(JSON.parse(products))
    dispatch({
      type: 'SET_INITIAL_INVENTORY_STATE',
      payload: { catMap, productMap: productsCatMap }
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <section className="section invSection">
      <h1 className="invSectionTitle">Menú de Inventario</h1>
      <NavLinkMenu navLinks={inventoryMenu} bgColor="#e7def3" />
      <InventoryState />
    </section>
  )
}

export default Inventario
