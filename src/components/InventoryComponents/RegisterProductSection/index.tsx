import { inventario } from '../../../utils/strRoutes';
import BackButtonLink from '../../Utils/BackButtonLink/BackButtonLink';
import RegisterProductModal from '../RegisterProductModal';
import './styles.global.scss';

function RegisterProductSection() {
  return (
    <div className="registerProductFormSection">
      <BackButtonLink to={inventario} />
      <RegisterProductModal />
    </div>
  );
}

export default RegisterProductSection;
