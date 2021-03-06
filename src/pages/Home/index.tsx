/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoginSection from '../../components/HomeComponents/LoginSection';
import { useGlobalContext } from '../../Context/globalState';
import { UserProfileType, UserRol } from '../../types/userprofile';
import './home.scss';

const f: React.Dispatch<React.SetStateAction<number>> = (s: number | ((presS: number) => number)) => {
  return s
}

f(78)

function Home() {
  const history = useHistory();
  const [users, _] = useState<UserProfileType[]>([]);
  const { globalState, dispatch } = useGlobalContext();

  useEffect(() => {
    (function () {
      if (globalState.user.rol !== UserRol.UNDEFINED) {
        history.push('/home');
      }
    })();
  }, [globalState.user.rol]);

  return (
    <section className="section homeSection">
      <h1 className="hs-title">Bienvenido</h1>
      {/* <HomeNav /> */}
      {globalState.user.rol !== UserRol.UNDEFINED ? null : (
        <LoginSection dispatch={dispatch} users={users} />
      )}
    </section>
  );
}

export default Home;
