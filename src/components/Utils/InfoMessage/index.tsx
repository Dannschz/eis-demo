import { useEffect } from 'react'
import './info.scss'

type InfoMessageProps = {
  message: string
  setValue: ({ message, show }: { message: string; show: boolean }) => void
  execFun?: () => void
}

function InfoMessage({ message, setValue, execFun }: InfoMessageProps) {
  useEffect(() => {
    setTimeout(() => {
      setValue({ message, show: false })
      if (execFun) {
        execFun()
      }
    }, 2500)
  })

  return (
    <div className='infoMessage'>
      <p>{message}</p>
    </div>
  )
}

export default InfoMessage
