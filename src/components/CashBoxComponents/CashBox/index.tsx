import { useState } from 'react'
import { Dispatch } from '../../../Context/globalState'
import { CashBoxType } from '../../../types/sell'
import './cashbox.global.scss'

type CashBoxProps = {
  cashbox: CashBoxType
  sellerId: string
  dispatch: Dispatch
}

export default function CashBox({ cashbox, sellerId, dispatch }: CashBoxProps) {
  const [reportValue, setReportValue] = useState('')
  const [cashoutValue, setCashoutValue] = useState('')

  const finalCash =
    cashbox.initialCash +
    cashbox.sold -
    cashbox.withdrawalCash +
    cashbox.deposits

  const diff = Number(reportValue) - finalCash

  const handleReportValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReportValue(e.currentTarget.value)
    if (+cashoutValue > +reportValue) {
      setCashoutValue('')
    }
  }

  const handleCashoutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value) > finalCash + diff) {
      setCashoutValue(String(finalCash + diff))
    } else {
      setCashoutValue(e.currentTarget.value)
    }
  }

  const handleClickReportButton = () => {
    dispatch({
      type: 'SET_INITIAL_CASHBOX_STATE',
      payload: {
        cashBox: {
          initialCash: finalCash - Number(cashoutValue) + diff,
          sold: 0,
          withdrawalCash: 0,
          deposits: 0
        }
      }
    })
    dispatch({ type: 'CLEAN_SALES' })
    setReportValue('')
    setCashoutValue('')
  }

  return (
    <div className="cashboxContainer">
      <h2>Caja</h2>
      <span className="cbc-fieldCash lineBehind">
        <p className="cbc-fc-text">Fondo inicial:</p>
        <p className="cbc-fc-cash">${cashbox.initialCash}</p>
      </span>
      <span className="cbc-fieldCash lineBehind">
        <p className="cbc-fc-text">Entradas:</p>
        <p className="cbc-fc-cash">${cashbox.sold}</p>
      </span>
      <span className="cbc-fieldCash lineBehind">
        <p className="cbc-fc-text">Retiros:</p>
        <p className="cbc-fc-cash">${cashbox.withdrawalCash}</p>
      </span>
      <span className="cbc-fieldCash lineBehind">
        <p className="cbc-fc-text">Depositos:</p>
        <p className="cbc-fc-cash">${cashbox.deposits}</p>
      </span>
      <span className="cbc-fieldCash lineBehind lastSpan">
        <p className="cbc-fc-text">Total en caja:</p>
        <p className="cbc-fc-cash">${finalCash}</p>
      </span>
      <span className="cbc-report">
        <label htmlFor="report">
          <p>Saldo final real</p>
          <div>
            $
            <input
              type="number"
              name="report"
              id="report"
              placeholder="$0.0"
              value={reportValue}
              onChange={handleReportValueChange}
              onFocus={(e) => e.currentTarget.select()}
            />
          </div>
        </label>
      </span>
      <span className="cbc-fieldCash lineBehind">
        <p className="cbc-fc-text">Diferencia:</p>
        <p className="cbc-fc-cash">${diff}</p>
      </span>
      <span className="cbc-report lastReport">
        <label htmlFor="cutRetiro">
          <p>Retiro por corte</p>
          <div>
            $
            <input
              type="number"
              name="cutRetiro"
              id="cutRetiro"
              placeholder="$0.0"
              value={cashoutValue}
              onChange={handleCashoutChange}
              onFocus={(e) => e.currentTarget.select()}
            />
          </div>
        </label>
      </span>
      <button
        className="reportButton"
        type="button"
        disabled={!reportValue}
        onClick={handleClickReportButton}
      >
        Realizar el Corte
      </button>
    </div>
  )
}
