import NavLinkMenu from '../../components/Utils/NavLinkMenu'
import entradasIcon from '../../img/entradas.svg'
import salidasIcon from '../../img/salidas.svg'
import addIcon from '../../img/addProduct.svg'
import editIcon from '../../img/editProduct.svg'
import barcodeIcon from '../../img/genBarcode.svg'
import { NavLinksMenuType } from '../../types/global'
import InventoryState from '../../components/InventoryComponents/InventoryState'
import './inventario.scss'

function Inventario() {

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

  return (
    <section className="section invSection">
      <h1 className="invSectionTitle">Menú de Inventario</h1>
      <NavLinkMenu navLinks={inventoryMenu} bgColor="#e7def3" />
      <InventoryState />
    </section>
  )
}

export default Inventario
