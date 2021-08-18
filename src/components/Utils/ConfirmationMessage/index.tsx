import React from 'react'
import UsefulButton from '../UsefulButton'
import './cm.scss'

type CMT = {
  handleOkButton: () => void
  handleCancelButton: () => void
}

function ConfirmationMessage({ handleOkButton, handleCancelButton }: CMT) {
  return (
    <div className='confirmationMessage'>
      <h5>¿Continuar con la operación?</h5>
      <div className='btns'>
        <UsefulButton
          fontSize={1.2}
          color='#00B9AE'
          width={45}
          handleClick={handleOkButton}
        >
          Si
        </UsefulButton>
        <UsefulButton
          fontSize={1.2}
          color='#D81E5B'
          width={45}
          handleClick={handleCancelButton}
        >
          No
        </UsefulButton>
      </div>
    </div>
  )
}

export default ConfirmationMessage
