import { useState } from 'react'
import InfoMessage from '../../Utils/InfoMessage'
import NewUserForm from '../NewUserForm'
import './signin.scss'

function SignInSection() {
  const [showMessage, setShowMessage] = useState({ show: false, message: '' })

  return (
    <section className='signInSection'>
      {showMessage.show && (
        <InfoMessage
          message='Se ha registrado al nuevo usuario'
          setValue={setShowMessage}
        />
      )}
      <NewUserForm />
    </section>
  )
}

export default SignInSection
