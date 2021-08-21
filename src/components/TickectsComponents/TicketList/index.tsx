/* eslint-disable no-underscore-dangle */
import React, { useState, Suspense } from 'react'
import { MeasureType } from '../../../types/inventory'
import { SaleType } from '../../../types/sell'
import Fallback from './Fallback'
import './ticketlist.scss'

const TicketLine = React.lazy(() => import('../TicketLine'))

type TLP = {
  sales: SaleType[]
  handleSetSelected: (sale: SaleType) => void
}

function TicketList({ sales, handleSetSelected }: TLP) {
  const [value, setValue] = useState('')

  const handleChangeValue = (newValue: string) => {
    setValue(newValue)
  }

  const getPeriodTotal = (ventas: SaleType[]) => {
    let total = 0
    ventas.forEach((sale) => {
      sale.concepts.forEach((c) => {
        total +=
          c.product.measure === MeasureType.g
            ? c.product.price * 1000 * c.bagAmount
            : c.product.price * c.bagAmount
      })
    })
    return total
  }

  /* useEffect(() => {
    ipcSellGetDaySales();
  }, []); */

  return (
    <>
      <h4 className='tl-title'>Ventas del Día</h4>
      <div className='tl-header'>
        <span className='tlh-child'>Folio</span>
        <span className='tlh-child'>Hora</span>
        <span className='tlh-child'>Total</span>
      </div>
      <div className='lineContainer'>
        <Suspense fallback={<Fallback />}>
          {sales.map((sale) => {
            return (
              <TicketLine
                key={sale._id}
                _id={sale._id}
                folio={sale.folio}
                date={sale.date}
                concepts={sale.concepts}
                cashReceived={sale.cashReceived}
                change={sale.change}
                seller={sale.seller}
                totalValue={sale.totalValue}
                handleChangeTicket={handleChangeValue}
                handleSetSelected={handleSetSelected}
                ticketValue={value}
              />
            )
          })}
        </Suspense>
      </div>
      <div className='tl-periodSold'>
        <span>Ganancias: ${getPeriodTotal(sales)}</span>
      </div>
    </>
  )
}

export default TicketList
