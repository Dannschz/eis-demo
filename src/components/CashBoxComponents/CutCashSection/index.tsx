/* eslint-disable no-underscore-dangle */
import { useGlobalContext } from '../../../Context/globalState';
import BackButtonLink from '../../Utils/BackButtonLink/BackButtonLink';
import CashBox from '../CashBox';
import './cutsection.global.scss';

function CutCashSection() {
  const { globalState, dispatch } = useGlobalContext();

  return (
    <section className="cutCashSection">
      <CashBox
        cashbox={globalState.cashBox}
        sellerId={globalState.user._id ? globalState.user._id : ''}
        dispatch={dispatch}
      />
      <BackButtonLink />
    </section>
  );
}

export default CutCashSection;
