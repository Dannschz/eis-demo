/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import homeIcon from '../../img/home.svg';
import cashIcon from '../../img/cash-register.svg';
import inventoryIcon from '../../img/otherInventory.svg';
import shoppingBag from '../../img/shopping-bag.svg';
import userIcon from '../../img/usernav.svg';
import { useGlobalContext } from '../../Context/globalState';
import { UserRol } from '../../types/userprofile';
import './nav.scss';

const WSTooltip = withStyles((theme) => ({
  arrow: {
    color: '#293241',
  },
  tooltip: {
    fontSize: theme.typography.pxToRem(14),
    padding: '6px',
    backgroundColor: '#293241',
    color: '#f1faee',
    fontWeight: 600,
  },
}))(Tooltip);

function Nav() {
  const [value, setValue] = useState('inicio');
  const { globalState } = useGlobalContext();

  const handleClick = (e: React.BaseSyntheticEvent) => {
    const textValue = e.target?.alt ?? e.target.ariaValueText;
    setValue(textValue);
  };

  const navForUserRol = ({
    user: { rol },
  }: {
    user: { rol: string };
  }): React.ReactNode => {
    if (rol === UserRol.ADMIN) {
      return (
        <>
          <WSTooltip title="Ventas" placement="right" arrow>
            <NavLink
              className={`aLink ${value === 'vender' ? 'selectedNavLink' : ''}`}
              exact
              to="/ventas"
              onClick={handleClick}
              aria-valuetext="vender"
            >
              <div className="navIcon">
                <img src={shoppingBag} alt="vender" />
              </div>
            </NavLink>
          </WSTooltip>
          <WSTooltip title="Inventario" placement="right" arrow>
            <NavLink
              className={`aLink ${
                value === 'inventario' ? 'selectedNavLink' : ''
              }`}
              exact
              to="/inventario"
              onClick={handleClick}
              aria-valuetext="inventario"
            >
              <div className="navIcon">
                <img src={inventoryIcon} alt="inventario" />
              </div>
            </NavLink>
          </WSTooltip>
          <WSTooltip title="Caja" placement="right" arrow>
            <NavLink
              className={`aLink ${value === 'caja' ? 'selectedNavLink' : ''}`}
              exact
              to="/caja"
              onClick={handleClick}
              aria-valuetext="caja"
            >
              <div className="navIcon">
                <img src={cashIcon} alt="caja" />
              </div>
            </NavLink>
          </WSTooltip>
          <WSTooltip title="Usuarios" placement="right" arrow>
            <NavLink
              className={`aLink ${
                value === 'usuarios' ? 'selectedNavLink' : ''
              }`}
              exact
              to="/users"
              onClick={handleClick}
              aria-valuetext="usuarios"
            >
              <div className="navIcon">
                <img src={userIcon} alt="usuarios" />
              </div>
            </NavLink>
          </WSTooltip>
        </>
      );
    }
    if (rol === UserRol.EMPLOYE) {
      return (
        <>
          <WSTooltip title="Caja" placement="right" arrow>
            <NavLink
              className={`aLink ${value === 'caja' ? 'selectedNavLink' : ''}`}
              exact
              to="/caja"
              onClick={handleClick}
              aria-valuetext="caja"
            >
              <div className="navIcon">
                <img src={cashIcon} alt="caja" />
              </div>
            </NavLink>
          </WSTooltip>
        </>
      );
    }
    return null;
  };

  return (
    <aside className="navAside">
      <nav className="navI">
        <ul className="unL">
          <WSTooltip title="Inicio" placement="right" arrow>
            <NavLink
              className={`aLink ${value === 'inicio' ? 'selectedNavLink' : ''}`}
              exact
              to="/"
              onClick={handleClick}
              aria-valuetext="inicio"
            >
              <div className="navIcon">
                <img src={homeIcon} alt="inicio" />
              </div>
            </NavLink>
          </WSTooltip>
          {navForUserRol(globalState)}
        </ul>
      </nav>
    </aside>
  );
}

export default Nav;
