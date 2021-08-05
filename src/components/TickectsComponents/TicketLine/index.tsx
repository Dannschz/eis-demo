/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { MeasureType } from '../../../types/inventory';
import { ConceptType, SaleType } from '../../../types/sell';
import './ticketline.global.scss';

type TicketLineProps = SaleType & {
  ticketValue: string;
  handleChangeTicket: (newValue: string) => void;
  handleSetSelected: (sale: SaleType) => void;
};

function TicketLine({
  _id,
  folio,
  date,
  concepts,
  cashReceived,
  change,
  seller,
  totalValue,
  handleChangeTicket,
  handleSetSelected,
  ticketValue,
}: TicketLineProps) {
  const getTotal = (products: ConceptType[]) => {
    let total = 0;
    products.forEach((p) => {
      total +=
        p.product.measure === MeasureType.g
          ? p.product.price * 1000 * p.amount
          : p.product.price * p.amount;
    });
    return total;
  };

  const handleChangeSale = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeTicket(e.currentTarget.value);
    handleSetSelected({
      _id,
      folio,
      date,
      concepts,
      cashReceived,
      change,
      seller,
      totalValue,
    });
  };

  /* useEffect(() => {
    console.log(, folio);
  }, [value]); */

  return (
    <label
      className={`ticketLine ${+ticketValue === folio ? 'selected' : ''}`}
      htmlFor={`${folio}`}
    >
      <span className="tl-child">{folio}</span>
      <span className="tl-child">{new Date(date).toLocaleTimeString()}</span>
      <span className="tl-child">${getTotal(concepts)}</span>
      <input
        type="radio"
        name="ticket"
        id={`${folio}`}
        value={`${folio}`}
        className="ticketLineInput"
        onChange={handleChangeSale}
      />
    </label>
  );
}

export default TicketLine;
