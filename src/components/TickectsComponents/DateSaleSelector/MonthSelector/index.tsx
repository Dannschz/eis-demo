import React from 'react'
import monthDate, { months, MonthNumber } from '../../../../utils/monthDate'

type MSP = {
  setParentMonth: (month: number) => void
}

function MonthSelector({ setParentMonth }: MSP) {
  // const [monthValue, setMonthValue] = useState('');
  const date = new Date()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setMonthValue(e.currentTarget.value);
    // console.log(e.currentTarget.value)
    const monthValue = months[+e.currentTarget.value as MonthNumber]().month
    console.log(monthValue)
    setParentMonth(monthValue)
  }

  /* useEffect(() => {
    ipcSellGetMonthSales(optMonthSelected(date.getMonth()).month);
  }, [monthValue]); */

  return (
    <label className='dss-label' htmlFor='byMonth'>
      <span>Elige un Mes</span>
      <select
        className='dss-mesOpt'
        name='mesOpt'
        onChange={handleChange}
        defaultValue={monthDate(date.getMonth() as MonthNumber).month}
      >
        {Object.values(months).map((value, index) => {
          const strMonth = value().strMonth
          const monthCapitalize =
            strMonth.charAt(0).toUpperCase() + strMonth.slice(1)
          return (
            <option key={value().strMonth} value={value().month}>
              {monthCapitalize}
            </option>
          )
        })}
      </select>
    </label>
  )
}

export default MonthSelector
