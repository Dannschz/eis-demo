import React, { useEffect } from 'react';
import NavLinkMenu from '../../components/Utils/NavLinkMenu';
import registerIcon from '../../img/clipboard.svg';
import cutIcon from '../../img/cashcut.svg';
import inoutIcon from '../../img/inout.svg';
import { NavLinksMenuType } from '../../types/global';
import { useGlobalContext } from '../../Context/globalState';
import './caja.scss';

function Caja() {
  const { globalState } = useGlobalContext();
  const cashMenu: NavLinksMenuType = [
    {
      to: '/caja/registro',
      title: 'Registro',
      imgPath: registerIcon,
      rol: 'ADMIN',
    },
    {
      to: '/caja/corte',
      title: 'Corte',
      imgPath: cutIcon,
      rol: globalState.user.rol,
    },
    {
      to: '/caja/inout',
      title: 'Retiro/Depósito',
      imgPath: inoutIcon,
      rol: globalState.user.rol,
    },
  ];

  useEffect(() => {
  }, []);

  return (
    <section className="section boxSection">
      <h2>Menú de Caja</h2>
      <NavLinkMenu navLinks={cashMenu} bgColor="#dbf0da" />
    </section>
  );
}

export default Caja;
