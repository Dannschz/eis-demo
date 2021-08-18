/* eslint-disable react/require-default-props */
import React, { useEffect, useRef, useState } from 'react'
import { MeasureType } from '../../../types/inventory'
import './styles.scss'

type ProductModal = {
  productId: string
  barcode: string
  name: string
  amount: number
  amountType: string
  measure: string
  price: number
  soldPieces: number
  categoryId: string
  closeEditModalFromParent: () => void
}

function EditProductModal({
  productId,
  barcode,
  name,
  amount,
  amountType,
  measure,
  price,
  soldPieces,
  categoryId,
  closeEditModalFromParent
}: ProductModal) {
  function conversion(m: string): string {
    return m === MeasureType.g ? String(price * 1000) : String(price)
  }

  const [nameValue, setNameValue] = useState(name)
  const [priceValue, setPriceValue] = useState(conversion(measure))
  const priceRef = useRef<HTMLInputElement>(null)

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNameValue(e.currentTarget.value)
  }

  const handlePriceChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPriceValue(e.currentTarget.value)
  }

  const handleCancelButton = () => {
    closeEditModalFromParent()
  }

  const handleSaveButton = () => {
    closeEditModalFromParent()
  }

  useEffect(() => {
    priceRef.current?.focus()
    priceRef.current?.select()
  }, [])

  return (
    <div className='EditModalProduct'>
      <h3 className='editModalTitle'>Editar Producto</h3>
      <form>
        <label htmlFor='nameId'>
          <p>Cambiar el Nombre</p>
          <input
            type='text'
            name='name'
            id='nameId'
            value={nameValue}
            placeholder='Nuevo nombre'
            onChange={handleNameChange}
          />
        </label>
        <label htmlFor='priceId'>
          <p>Cambiar El precio</p>
          <input
            ref={priceRef}
            type='number'
            name='price'
            id='priceId'
            value={priceValue}
            placeholder='Nuevo precio'
            onChange={handlePriceChange}
          />
        </label>
        <div className='cancelOrSave'>
          <button
            className='cancel btn'
            type='button'
            onClick={handleCancelButton}
          >
            Cancelar
          </button>
          <button className='save btn' type='button' onClick={handleSaveButton}>
            Guardar
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProductModal
