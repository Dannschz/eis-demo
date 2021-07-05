import React, { useEffect, useState } from 'react';
import { Dispatch } from '../../../Context/globalState';
import { UserProfileType } from '../../../types/userprofile';
import InfoMessage from '../../Utils/InfoMessage';
import LoginForm from '../LoginForm';
import NewUserForm from '../NewUserForm';
import './login.global.scss';

type LoginSectionProps = {
  dispatch: Dispatch;
  users: UserProfileType[];
};

function LoginSection({ dispatch, users }: LoginSectionProps) {
  const [errorPassword, setErrorPassword] = useState({
    show: false,
    message: '',
  });

  function showErrorPassword(): React.ReactNode {
    if (errorPassword.show) {
      setTimeout(() => {
        setErrorPassword({ show: false, message: '' });
      }, 2500);
      return <InfoMessage message={errorPassword.message} />;
    }
    return null;
  }

  useEffect(() => {
  }, []);

  return (
    <section className="loginSection">
      {showErrorPassword()}
      {users.length === 0 ? <NewUserForm /> : <LoginForm />}
    </section>
  );
}

export default LoginSection;
