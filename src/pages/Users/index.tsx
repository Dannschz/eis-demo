import React from 'react';
import registerIcon from '../../img/registerUser.svg';
import NavLinkMenu from '../../components/Utils/NavLinkMenu';
import { NavLinksMenuType } from '../../types/global';
import './users.scss';

function UsersPage() {
  const usersMenu: NavLinksMenuType = [
    {
      to: '/users/registrar',
      title: 'Registrar',
      imgPath: registerIcon,
      rol: 'ADMIN',
    },
    /* {
      to: '/users/pordefinir',
      title: 'Entradas',
      imgPath: entradasIcon,
      rol: 'ADMIN',
    }, */
  ];

  return (
    <div className="section userPageSection">
      <h2>Menú de Usuarios</h2>
      <NavLinkMenu navLinks={usersMenu} bgColor="#BDE6FF" />
    </div>
  );
}

export default UsersPage;
