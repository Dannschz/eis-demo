import BackButtonLink from '../../Utils/BackButtonLink/BackButtonLink';
import RegisterProductModal from '../RegisterProductModal';
import './styles.global.scss';

function RegisterProductSection() {
  return (
    <div className="registerProductFormSection">
      <BackButtonLink />
      <RegisterProductModal />
    </div>
  );
}

export default RegisterProductSection;
