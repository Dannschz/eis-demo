import { useEffect, useState } from 'react'
import { Dispatch } from '../../../Context/globalState'
import { UserProfileType } from '../../../types/userprofile'
import InfoMessage from '../../Utils/InfoMessage'
import LoginForm from '../LoginForm'
import NewUserForm from '../NewUserForm'
import './login.global.scss'

type LoginSectionProps = {
  dispatch: Dispatch
  users: UserProfileType[]
}

function LoginSection({ dispatch, users }: LoginSectionProps) {
  const [errorPassword, setErrorPassword] = useState({
    show: false,
    message: ''
  })

  useEffect(() => {}, [])

  return (
    <section className="loginSection">
      {errorPassword.show && (
        <InfoMessage
          message="El ID o la contraseña son incorrectos"
          setValue={setErrorPassword}
        />
      )}
      {users.length === 0 ? <NewUserForm /> : <LoginForm />}
    </section>
  )
}

export default LoginSection
