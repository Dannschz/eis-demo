import React, { useEffect, useState } from 'react';
import TicketSection from '../../components/TickectsComponents/TicketSection';
import { SaleType } from '../../types/sell';
import './styles.global.scss';

function Vender() {
  const [sales, setSales] = useState<SaleType[]>([]);

  useEffect(() => {
  }, []);

  return (
    <section id="sellSection" className="section sellSection">
      <TicketSection sales={sales} />
    </section>
  );
}

export default Vender;
