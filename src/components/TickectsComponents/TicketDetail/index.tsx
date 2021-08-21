import { AmountType, MeasureType } from '../../../types/inventory'
import { ConceptType, SaleType } from '../../../types/sell'
import './ticket.scss'

type TicketProps = {
  sale: SaleType
}

function TicketDetail({ sale }: TicketProps) {
  const getTotal = (concepts: ConceptType[]) => {
    let total = 0
    concepts.forEach((c) => {
      c.product.measure === MeasureType.g
        ? (total += c.product.price * 1000 * c.bagAmount)
        : (total += c.product.price * c.bagAmount)
    })
    return total
  }

  const getAmountConversion = (concept: ConceptType) => {
    if (concept.bagAmount < 1) {
      if (concept.product.amountType === AmountType.granel) {
        return `${concept.bagAmount * 1000}g`
      }
      return `${concept.bagAmount}kg`
    }
    return `${concept.bagAmount}`
  }

  return (
    <>
      {sale && (
        <>
          <h3 className='shopName'>Shop Name</h3>
          <div className='ticketItem' key={sale._id}>
            <div className='ti-sep'>
              <p>Folio: {sale.folio}</p>
              <p>Fecha: {new Date(sale.date).toLocaleDateString()}</p>
            </div>
            <p>Vendedor: {sale.seller.userName}</p>
            <div className='tlConceptContainer'>
              <div className='tl-concepts-header'>
                <span className='tlch-i'>Concepto</span>
                <span className='tlch-i'>Precio</span>
                <span className='tlch-i'>Cantidad</span>
                <span className='tlch-i'>Importe</span>
              </div>
              {sale.concepts.map((concept) => {
                return (
                  <li className='conceptC' key={concept.product._id}>
                    <p className='cc-item'>{concept.product.name}</p>
                    <p className='cc-item'>${concept.product.price}</p>
                    <p className='cc-item'>{getAmountConversion(concept)}</p>
                    <p className='cc-item'>
                      $
                      {concept.product.measure === MeasureType.g
                        ? concept.product.price * 1000 * concept.bagAmount
                        : concept.product.price * concept.bagAmount}
                    </p>
                  </li>
                )
              })}
            </div>
            <div className='priceFooter'>
              <p className='pf-i'>Total: ${getTotal(sale.concepts)}</p>
              <p className='pf-i'>Paga con: ${sale.cashReceived}</p>
              <p className='pf-i'>Cambio: ${sale.change}</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default TicketDetail
