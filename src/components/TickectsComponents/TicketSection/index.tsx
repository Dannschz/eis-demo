import { useCallback, useEffect, useState } from 'react'
import fetchInventoryDB from '../../../services/fetchDB/fetchInventoryDB'
import { SaleType } from '../../../types/sell'
import DateSaleSelector from '../DateSaleSelector'
import TicketDetail from '../TicketDetail'
import TicketList from '../TicketList'
import './ticketsection.scss'

const emptySale: SaleType = {
  _id: '',
  folio: 0,
  cashReceived: 0,
  change: 0,
  concepts: [],
  date: '0',
  seller: {
    id: '',
    rol: 'UNDEFINED',
    userName: '',
    _id: ''
  },
  totalValue: 0
}

function TicketSection() {
  const [saleSelected, setSaleSelected] = useState<SaleType>(emptySale)
  const [dateFilter, setDateFilter] = useState('hoy')
  const [sales, setSales] = useState<SaleType[]>([])

  const date = new Date()
  const [monthValue, setMonthValue] = useState(date.getMonth())

  console.log(monthValue)

  const fetchSales = async (filter: string) => {
    if (filter === 'hoy') {
      setSales(await fetchInventoryDB.getDaySales())
    }
    if (filter === 'mes') {
      setSales(await fetchInventoryDB.getMonthSales(monthValue))
    }
  }

  const handleSetSaleSelected = useCallback((sale: SaleType) => {
    setSaleSelected(sale)
  }, [])

  useEffect(() => {
    fetchSales(dateFilter)
  }, [dateFilter, monthValue])

  return (
    <div className='ticketsC'>
      <DateSaleSelector
        setFilterSelector={setDateFilter}
        setMonthValue={setMonthValue}
      />
      <div className='salesContainer'>
        <h3 className='rvtitle'>Reporte de Ventas</h3>
        <div className='tc-daySales'>
          <div className='repoVC'>
            <div className='tcds-l'>
              <TicketList
                sales={sales}
                handleSetSelected={handleSetSaleSelected}
              />
            </div>
            <div className='tcds-r'>
              <TicketDetail sale={sales.length > 0 ? saleSelected : emptySale} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketSection
