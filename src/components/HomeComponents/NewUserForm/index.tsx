/* eslint-disable func-names */
import { ChangeEvent, useEffect, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import './newuser.global.scss'
import UsefulButton from '../../Utils/UsefulButton'
// import { UserRol } from '../../../types/userprofile';
// import hashPassword from '../../../utils/hashPassword';
import BackButtonLink from '../../Utils/BackButtonLink/BackButtonLink'
import { users } from '../../../utils/strRoutes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(0),
      minWidth: 120,
      backgroundColor: 'white'
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
)

enum RolUpercase {
  Administrador = 'Administrador',
  Vendedor = 'Vendedor',
  vacio = ''
}

/* type NewUserFormProps = {
  userRol: Rol;
}; */

function NewUserForm() {
  const classes = useStyles()
  const idGenerator = (): string => {
    return String(Math.floor(Math.random() * (999999 - 100000) + 100000))
  }

  const [idValue, setId] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [rolValue, setRolValue] = useState<RolUpercase>('' as RolUpercase)
  const [passwordValue, setPasswordValue] = useState('')

  const handleChangeNameValue = (e: React.FormEvent<HTMLInputElement>) => {
    setNameValue(e.currentTarget.value)
  }

  const handleChangeRolValue = (e: ChangeEvent<{ value: unknown }>) => {
    setRolValue(e.target.value as RolUpercase)
  }

  const handleChangePasswordValue = (e: React.FormEvent<HTMLInputElement>) => {
    setPasswordValue(e.currentTarget.value)
  }

  const handleRegisterButtonClick = async () => {}

  const isButtonDisabled = (): boolean => {
    return (
      (rolValue !== RolUpercase.Administrador &&
        rolValue !== RolUpercase.Vendedor) ||
      nameValue === '' ||
      passwordValue === ''
    )
  }

  useEffect(() => {
    setId(idGenerator())
  }, [])

  return (
    <div className="newUserFormContainer">
      <h2 className="nufc-title">Registrar nuevo usuario</h2>
      <form className="nufc-form">
        <label className="nufc-nameLabel" htmlFor="idUser">
          <span className="nufc-span">ID de usuario</span>
          <input
            className="nufc-input"
            type="text"
            name="userId"
            value={idValue}
            id="idUser"
            disabled
          />
        </label>
        <label className="nufc-nameLabel" htmlFor="nameUser">
          <span className="nufc-span">Nombre de usuario</span>
          <input
            className="nufc-input"
            type="text"
            name="userName"
            value={nameValue}
            onChange={handleChangeNameValue}
            id="nameUser"
          />
        </label>
        <FormControl
          variant="outlined"
          className={`${classes.formControl} nufc-select`}
        >
          <InputLabel id="rolSelect">Rol</InputLabel>
          <Select
            labelId="rolSelect"
            id="rolSelect"
            value={rolValue}
            onChange={handleChangeRolValue}
            label="Rol"
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value={RolUpercase.Administrador}>Administrador</MenuItem>
            <MenuItem value={RolUpercase.Vendedor}>Vendedor</MenuItem>
          </Select>
        </FormControl>
        <label className="nufc-nameLabel" htmlFor="pwdUser">
          <span className="nufc-span">Contraseña</span>
          <input
            className="nufc-input"
            type="password"
            name="userPassword"
            value={passwordValue}
            onChange={handleChangePasswordValue}
            id="pwdUser"
          />
        </label>
        <UsefulButton
          color="green"
          fontSize={1.4}
          disabled={isButtonDisabled()}
          handleClick={handleRegisterButtonClick}
        >
          Registrar
        </UsefulButton>
      </form>
      <BackButtonLink to={users} />
    </div>
  )
}

export default NewUserForm
