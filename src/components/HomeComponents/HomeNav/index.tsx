import loginIcon from '../../../img/login.svg';
import registerIcon from '../../../img/u-register.svg';
import { NavLinksMenuType } from '../../../types/global';
import NavLinkMenu from '../../Utils/NavLinkMenu';
import './homenav.global.scss';

function HomeNav() {
  const homeMenu: NavLinksMenuType = [
    {
      to: '/login',
      title: 'Iniciar Sesión',
      imgPath: loginIcon,
      rol: 'UNDEFINED',
    },
    {
      to: '/signin',
      title: 'Registrar Usuario',
      imgPath: registerIcon,
      rol: 'UNDEFINED',
    },
  ];

  return (
    <div className="homeNavContainer">
      <nav className="hnc-nav">
        <NavLinkMenu navLinks={homeMenu} bgColor="#d5e8f3" />
      </nav>
    </div>
  );
}

export default HomeNav;
