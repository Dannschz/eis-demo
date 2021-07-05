import React, { useEffect, useState } from 'react';
import InfoMessage from '../../Utils/InfoMessage';
import NewUserForm from '../NewUserForm';
import './signin.global.scss';

function SignInSection() {
  const [showMessage, setShowMessage] = useState(false);

  function showInfoMessage(): React.ReactNode {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 2500);
      return <InfoMessage message="Se ha registrado al nuevo usuario" />;
    }
    return null;
  }

  console.log(showMessage);

  useEffect(() => {
  }, []);

  return (
    <section className="signInSection">
      {showInfoMessage()}
      <NewUserForm />
    </section>
  );
}

export default SignInSection;
