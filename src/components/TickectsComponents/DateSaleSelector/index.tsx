import React, { useState } from 'react'
import MonthSelector from './MonthSelector';
import './datesaleselector.scss'

type DateSelectorProps = {
  setFilterSelector(value: string): void
  setMonthValue(month: number): void
}

function DateSaleSelector({ setFilterSelector, setMonthValue }: DateSelectorProps) {
  const [optValue, setOptValue] = useState('hoy')
  const [delDate, setDelDate] = useState('')
  const [alDate, setAlDate] = useState('')

  console.log(optValue, delDate, alDate)

  const handleOptChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSelector(e.currentTarget.value)
    setOptValue(e.currentTarget.value)
  }

  const handleDelDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDelDate(e.currentTarget.value)
  }
  const handleAlDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlDate(e.currentTarget.value)
  }

  const showOptions = () => {
    if (optValue === 'periodo') {
      return (
        <>
          <label className='dss-period' htmlFor='del-p'>
            <p>Del:</p>
            <input
              className='dssPInput'
              type='date'
              name='periodo'
              id='del-p'
              value={delDate}
              onChange={handleDelDateChange}
              required
            />
          </label>
          <label className='dss-period' htmlFor='al-p'>
            <p>Al:</p>
            <input
              className='dssPInput'
              type='date'
              name='periodo'
              id='al-p'
              value={alDate}
              onChange={handleAlDateChange}
              required
            />
          </label>
        </>
      )
    }
    return null
  }

  return (
    <div className='dateSaleSelector'>
      <h3 className='dss-title'>Filtrar Ventas</h3>
      <select
        className='dss-select'
        name='date'
        id='date'
        onChange={handleOptChangeValue}
      >
        <option value='' disabled>
          Filtrar por fecha
        </option>
        <option value='hoy'>Hoy</option>
        <option value='mes'>Por Mes</option>
        <option value='periodo'>Periodo</option>
      </select>
      {optValue === 'mes' && <MonthSelector setParentMonth={setMonthValue} />}
      {showOptions()}
    </div>
  )
}

export default DateSaleSelector
