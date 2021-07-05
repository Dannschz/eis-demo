import React from 'react';
import { useGlobalContext } from '../../../Context/globalState';
import BackButtonLink from '../../Utils/BackButtonLink/BackButtonLink';
import Deposito from '../Deposito';
import Retiro from '../Retiro';
import './inout.global.scss';

function InOutCashSection() {
  const { globalState, dispatch } = useGlobalContext();

  return (
    <section className="section inoutCashSection">
      <h2>Retiros y Depositos</h2>
      <div className="inout-rd">
        <div className="inoutContainer">
          <Retiro cashBox={globalState.cashBox} dispatch={dispatch} />
        </div>
        <div className="inoutContainer">
          <Deposito dispatch={dispatch} />
        </div>
      </div>
      <BackButtonLink />
    </section>
  );
}

export default InOutCashSection;
