import React, { useEffect, useState } from 'react'
import TicketSection from '../../components/TickectsComponents/TicketSection'
import fetchDB from '../../services/fetchDB'
import { SaleType } from '../../types/sell'
import './styles.scss'

function Vender() {
  const [sales, setSales] = useState<SaleType[] | null>([])

  const fetchDaySales = async () => {
    setSales(await fetchDB.getDaySales())
  }

  console.log(sales)

  useEffect(() => {
    fetchDaySales()
  }, [])

  useEffect(() => {}, [])

  return (
    <section id='sellSection' className='section sellSection'>
      <TicketSection sales={sales ?? []} />
    </section>
  )
}

export default Vender
