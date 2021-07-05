import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.global.scss';
import { useGlobalContext } from '../../../Context/globalState';
import { NavLinksMenuType } from '../../../types/global';

interface NavLinkMenuProps {
  navLinks: NavLinksMenuType;
  bgColor: string;
}

function NavLinkMenu({ navLinks, bgColor = '#d6e1f1' }: NavLinkMenuProps) {
  const { globalState } = useGlobalContext();
  const {
    user: { rol },
  } = globalState;

  return (
    <div className="InventoryMenuContainer">
      <nav className="navInsideInventory">
        {navLinks.map((navLink) => {
          return navLink.rol === rol ? (
            <NavLink
              key={navLink.to}
              className="navInv"
              exact
              to={navLink.to}
            >
              <div className="icon">
                <img src={navLink.imgPath} alt="registrar" />
              </div>
              <span>{navLink.title}</span>
            </NavLink>
          ) : null;
        })}
      </nav>
    </div>
  );
}

export default NavLinkMenu;
