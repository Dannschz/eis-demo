import React, { useCallback, useEffect, useState } from 'react';
import { SaleType } from '../../../types/sell';
import DateSaleSelector from '../DateSaleSelector';
import TicketDetail from '../TicketDetail';
import TicketList from '../TicketList';
import './ticketsection.global.scss';

type TSP = {
  sales: SaleType[];
};

function TicketSection({ sales }: TSP) {
  const [saleSelected, setSaleSelected] = useState<SaleType>();

  const handleSetSaleSelected = useCallback((sale: SaleType) => {
    setSaleSelected(sale);
  }, []);

  useEffect(() => {
  }, []);

  return (
    <div className="ticketsC">
      <DateSaleSelector />
      <div className="tc-daySales">
        <h3 className="rvtitle">Reporte de Ventas</h3>
        <div className="repoVC">
          <div className="tcds-l">
            <TicketList
              sales={sales}
              handleSetSelected={handleSetSaleSelected}
            />
          </div>
          <div className="tcds-r">
            <TicketDetail sale={saleSelected ?? null} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSection;
