import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../../Context/globalState';
import userIcon from '../../../img/user.svg';
import { Rol, UserRol } from '../../../types/userprofile';
import './profilenav.global.scss';

function ProfileNav() {
  const { globalState } = useGlobalContext();
  const { userName, rol } = globalState.user;
  const { dispatch } = useGlobalContext();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
  };

  const getRol = (userRol: Rol): string => {
    if (userRol === UserRol.ADMIN) return 'Administrador';
    if (userRol === UserRol.EMPLOYE) return 'Vendedor';
    return '';
  };

  return (
    <nav className="profileNavContainer">
      <div className="pnc-empty" />
      <div className="pnc-userInfo">
        <div className="pnc-userInfo-userName">
          <img src={userIcon} alt="user" />
          <span className="userInfo-userName">{userName}</span>
        </div>
        <span className="pnc-userInfo-id">{getRol(rol)}</span>
        <button
          className="pnc-logoutButton"
          type="button"
          onClick={handleLogOut}
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
}

export default ProfileNav;
