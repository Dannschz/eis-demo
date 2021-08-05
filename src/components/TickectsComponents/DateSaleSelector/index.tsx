import React, { useState } from 'react';
import './datesaleselector.global.scss';

function DateSaleSelector() {
  const [optValue, setOptValue] = useState('hoy');
  const [delDate, setDelDate] = useState('');
  const [alDate, setAlDate] = useState('');

  console.log(optValue, delDate, alDate);

  const handleOptChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptValue(e.currentTarget.value);
  };

  const handleDelDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDelDate(e.currentTarget.value);
  };
  const handleAlDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlDate(e.currentTarget.value);
  };

  const showOptions = () => {
    if (optValue === 'mes') {
      return (
        <label className="dss-label" htmlFor="byMonth">
          <span>Elige un Mes</span>
          <select className="dss-mesOpt" name="mesOpt">
            <option value="enero">Enero</option>
            <option value="febrero">Febrero</option>
            <option value="marzo">Marzo</option>
            <option value="abril">Abril</option>
            <option value="mayo">Mayo</option>
            <option value="junio">Junio</option>
            <option value="julio">Julio</option>
            <option value="agosto">Agosto</option>
            <option value="septiembre">Septiembre</option>
            <option value="octubre">Octubre</option>
            <option value="noviembre">Noviembre</option>
            <option value="diciembre">Diciembre</option>
          </select>
        </label>
      );
    }
    if (optValue === 'periodo') {
      return (
        <>
          <label className="dss-period" htmlFor="del-p">
            <p>Del:</p>
            <input
              className="dssPInput"
              type="date"
              name="periodo"
              id="del-p"
              value={delDate}
              onChange={handleDelDateChange}
              required
            />
          </label>
          <label className="dss-period" htmlFor="al-p">
            <p>Al:</p>
            <input
              className="dssPInput"
              type="date"
              name="periodo"
              id="al-p"
              value={alDate}
              onChange={handleAlDateChange}
              required
            />
          </label>
        </>
      );
    }
    return null;
  };

  return (
    <div className="dateSaleSelector">
      <h3 className="dss-title">Filtrar Ventas</h3>
      <select
        className="dss-select"
        name="date"
        id="date"
        onChange={handleOptChangeValue}
      >
        <option value="" disabled>
          Filtrar por fecha
        </option>
        <option value="hoy">Hoy</option>
        <option value="mes">Por Mes</option>
        <option value="periodo">Periodo</option>
      </select>
      {showOptions()}
    </div>
  );
}

export default DateSaleSelector;
