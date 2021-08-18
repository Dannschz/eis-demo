import { useGlobalContext } from '../../../Context/globalState'
import { NavLinksMenuType } from '../../../types/global'
import NavLinkStyled from './styled'
import './styles.scss'

interface NavLinkMenuProps {
  navLinks: NavLinksMenuType
  bgColor: string
}

function NavLinkMenu({ navLinks, bgColor = '#d6e1f1' }: NavLinkMenuProps) {
  const { globalState } = useGlobalContext()
  const {
    user: { rol }
  } = globalState

  return (
    <div className='InventoryMenuContainer'>
      <nav className='navInsideInventory'>
        {navLinks.map((navLink) => {
          return navLink.rol === rol ? (
            <NavLinkStyled
              key={navLink.to}
              className='navInv'
              exact
              bgcolor={bgColor}
              to={navLink.to}
            >
              <div className='icon'>
                <img src={navLink.imgPath} alt='registrar' />
              </div>
              <span>{navLink.title}</span>
            </NavLinkStyled>
          ) : null
        })}
      </nav>
    </div>
  )
}

export default NavLinkMenu
