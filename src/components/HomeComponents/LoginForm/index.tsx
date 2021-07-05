/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
/* import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'; */
import './loginform.global.scss';

function LoginForm() {
  // const classes = useStyles();

  const [idValue, setIdValue] = useState('');
  // const [nameValue, setNameValue] = useState('');
  // const [rolValue, setRolValue] = useState<RolUpercase>('' as RolUpercase);
  const [passwordValue, setPasswordValue] = useState('');

  /* const handleChangeNameValue = (e: React.FormEvent<HTMLInputElement>) => {
    setNameValue(e.currentTarget.value);
  }; */

  /* const handleChangeRolValue = (e: ChangeEvent<{ value: unknown }>) => {
    setRolValue(e.target.value as RolUpercase);
  }; */

  const handleChangeIdValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdValue(e.currentTarget.value);
  };

  const handleChangePasswordValue = (e: React.FormEvent<HTMLInputElement>) => {
    setPasswordValue(e.currentTarget.value);
  };

  const handleLogInButton = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="loginFormContainer">
      <h2 className="lfc-title">Iniciar Sesión</h2>
      <form className="lfc-form" onSubmit={handleLogInButton}>
        <div className="lfc-selectGroup">
          <label className="lfc-nameLabel" htmlFor="idForm">
            <span>Introduce tu ID</span>
            <input
              tabIndex={0}
              className="lfc-input"
              type="text"
              name="id"
              id="idForm"
              value={idValue}
              onChange={handleChangeIdValue}
            />
          </label>
        </div>
        <label className="lfc-nameLabel" htmlFor="pwdUser">
          <span className="lfc-span">Contraseña</span>
          <input
            tabIndex={0}
            className="lfc-input"
            type="password"
            name="userPassword"
            value={passwordValue}
            onChange={handleChangePasswordValue}
            id="pwdUser"
          />
        </label>
        <button
          tabIndex={0}
          className="lfc-loginButton"
          type="submit"
          onClick={handleLogInButton}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
