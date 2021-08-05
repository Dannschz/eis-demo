/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef, useState } from 'react'
import { Dispatch } from '../../../Context/globalState'
import { ProductBagClass } from '../../../types/sell'
import BagSellModal from '../BagSellModal'
import ProductBag from '../ProductBag'
import checkedSellIcon from '../../../img/checkedSell.svg'
import './styles.global.scss'

type ShoppingBagProps = {
  productsToSell: ProductBagClass
  dispatch: Dispatch
}

function ShoppingBag({ productsToSell, dispatch }: ShoppingBagProps) {
  const [showBagModal, setShowBagModal] = useState(false)
  const [showMessageDone, setShowMessageDone] = useState(false)
  const [saveSellDone, setSaveSellDone] = useState(false)
  const messageRef = useRef<HTMLDivElement>(null)

  const handlePayButton = () => {
    setShowBagModal(!showBagModal)
    // console.log(productsToSell);
  }

  const handleCancelButtonChild = () => {
    setShowBagModal(false)
  }

  const handleFinishSellButtonChild = () => {}

  const handleCleanButton = () => {
    dispatch({ type: 'CLEAN_BAG' })
  }

  const showSellDoneMessage = (): React.ReactNode => {
    if (showMessageDone && saveSellDone) {
      setTimeout(() => {
        messageRef.current?.classList.remove('showMessage')
        messageRef.current?.classList.add('ocultMessage')
      }, 2000)
      setTimeout(() => {
        setShowMessageDone(false)
      }, 2500)
      return (
        <div ref={messageRef} className="sellDoneMessage showMessage">
          <p>Venta finalizada</p>
          <img src={checkedSellIcon} alt="ok" />
        </div>
      )
    }
    return null
  }

  const handleSetSellMessageFromParent = () => {
    setShowMessageDone(true)
  }

  useEffect(() => {}, [])

  return (
    <div className="shoppingBagMain">
      <div className="shoppingBagSell">
        <div className="hgs-c">
          <div className="headerGridShop">
            <span>Producto</span>
            <span>$ por unidad</span>
            <span>Cantidad</span>
            <span>Importe</span>
          </div>
        </div>
        {Object.values(productsToSell.products).map((value) => {
          return (
            <ProductBag
              key={value._id}
              barcode={value.barcode}
              name={value.name}
              price={value.price}
              amount={value.amount}
              amountType={value.amountType}
              measure={value.measure}
              bagAmount={value.bagAmount}
            />
          )
        })}
        <div className="totalAmount">
          <span>{`Total: $${productsToSell.getTotal()}`}</span>
        </div>
      </div>
      <div className="sellButtonContainer">
        <button
          className="sobtn cancelButton"
          type="button"
          disabled={!(Object.entries(productsToSell.products).length > 0)}
          onClick={handleCleanButton}
        >
          Limpiar
        </button>
        <button
          className="sobtn sellButton"
          type="button"
          disabled={
            !(Object.entries(productsToSell.products).length > 0) ||
            productsToSell.getTotal() === 0
          }
          onClick={handlePayButton}
        >
          Cobrar
        </button>
      </div>
      {showSellDoneMessage()}
      {showBagModal && (
        <BagSellModal
          total={productsToSell.getTotal()}
          products={productsToSell.products}
          handleCancelButtonFromParent={handleCancelButtonChild}
          handleFinishSellButtonFromParent={handleFinishSellButtonChild}
          handleSellDoneMessage={handleSetSellMessageFromParent}
        />
      )}
    </div>
  )
}

export default ShoppingBag
