import React from 'react';
import TicketSection from '../../components/TickectsComponents/TicketSection';
import './ticketpage.global.scss';

function Tickets() {
  return (
    <section className="ticketSection">
      <TicketSection sales={[]} />
    </section>
  );
}

export default Tickets;
