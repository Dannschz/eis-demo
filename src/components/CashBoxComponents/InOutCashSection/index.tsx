import { useGlobalContext } from '../../../Context/globalState';
import { caja } from '../../../utils/strRoutes';
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
      <BackButtonLink to={caja} />
    </section>
  );
}

export default InOutCashSection;
