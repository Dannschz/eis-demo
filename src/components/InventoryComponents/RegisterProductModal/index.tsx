/* eslint-disable react/require-default-props */
import { useState, useEffect } from 'react';
import RegisterProductForm from '../RegisterProductForm';
// import { useGlobalContext } from '../../../Context/globalState';
import InfoMessage from '../../Utils/InfoMessage';
import './rmodal.global.scss';

type RegisterProductModalProps = {
  barcode?: string;
  name?: string;
  closeRegisterModal?: () => void;
  handleCloseGenModal?: () => void;
};

function RegisterProductModal({
  barcode = '',
  name = '',
  closeRegisterModal = () => null,
  handleCloseGenModal = () => null,
}: RegisterProductModalProps) {
  // const { dispatch } = useGlobalContext();
  const [showMessage, setShowMessage] = useState({ show: false, message: '' });

  function showInfoMessage(): React.ReactNode {
    if (showMessage.show) {
      setTimeout(() => {
        setShowMessage((prevState) => {
          return { ...prevState, show: false };
        });
        closeRegisterModal();
        handleCloseGenModal();
      }, 3000);
      return <InfoMessage message={showMessage.message} />;
    }
    return null;
  }

  useEffect(() => {
  }, []);

  return (
    <div
      className={`registerProductModal ${barcode && name ? '' : 'noAbsolute'}`}
    >
      {showInfoMessage()}
      <RegisterProductForm barcode={barcode} name={name} />
    </div>
  );
}

export default RegisterProductModal;
