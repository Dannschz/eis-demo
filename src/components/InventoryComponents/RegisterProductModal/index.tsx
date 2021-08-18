/* eslint-disable react/require-default-props */
import { useState, useEffect } from 'react'
import RegisterProductForm from '../RegisterProductForm'
// import { useGlobalContext } from '../../../Context/globalState';
import InfoMessage from '../../Utils/InfoMessage'
import './rmodal.scss'

type RegisterProductModalProps = {
  barcode?: string
  name?: string
  closeRegisterModal?: () => void
  handleCloseGenModal?: () => void
}

function RegisterProductModal({
  barcode = '',
  name = '',
  closeRegisterModal = () => null,
  handleCloseGenModal = () => null
}: RegisterProductModalProps) {
  // const { dispatch } = useGlobalContext();
  const [showMessage, setShowMessage] = useState({ show: false, message: '' })

  useEffect(() => {}, [])

  return (
    <div
      className={`registerProductModal ${barcode && name ? '' : 'noAbsolute'}`}
    >
      {showMessage.show && (
        <InfoMessage
          message='Se registro el producto correctamente'
          setValue={setShowMessage}
          execFun={() => {
            closeRegisterModal()
            handleCloseGenModal()
          }}
        />
      )}
      <RegisterProductForm barcode={barcode} name={name} />
    </div>
  )
}

export default RegisterProductModal
