import { useEffect, useRef } from 'react'
import checkedSellIcon from '../../../img/checkedSell.svg'

type SellMessageProps = {
  showMessageDone: boolean
  saveSellDone: boolean
  setShowMessage(show: boolean): void
}

function SellDoneMessage({
  showMessageDone,
  saveSellDone,
  setShowMessage
}: SellMessageProps) {
  const messageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (showMessageDone && saveSellDone) {
      setTimeout(() => {
        messageRef.current?.classList.remove('showMessage')
        messageRef.current?.classList.add('ocultMessage')
      }, 2000)
      setTimeout(() => {
        setShowMessage(false)
      }, 2500)
    }
  })

  return (
    <div ref={messageRef} className='sellDoneMessage showMessage'>
      <p>Venta finalizada</p>
      <img src={checkedSellIcon} alt='ok' />
    </div>
  )
}

export default SellDoneMessage
