/* eslint-disable react/require-default-props */
import { useState, useRef, createRef } from 'react';
import './styles.global.scss';
import { useGlobalContext } from '../../../Context/globalState';
import { AmountType, MeasureType } from '../../../types/inventory';

type RegisterProductProps = {
  barcode?: string;
  name?: string;
};

function RegisterProductForm({
  barcode = '',
  name = '',
}: RegisterProductProps) {
  const [barcodeValue, setBarcode] = useState<string>(barcode);
  const [nameValue, setName] = useState(name);
  const [amountValue, setAmount] = useState<number | string>('');
  const [measure, setMeasure] = useState<MeasureType>(MeasureType.default);
  const [amountType, setAmountType] = useState<AmountType>(AmountType.pieza);
  const [price, setPrice] = useState<number | string>('');
  const [categoryType, setCategoryType] = useState('existente');
  const [categoryOption, setcategoryOption] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const { globalState } = useGlobalContext();
  const categoryOptionInputRef = useRef<HTMLInputElement>(null);
  const barcodeInputRef = createRef<HTMLInputElement>();

  // handle Input Events
  const onChangeBarcode = (e: React.FormEvent<HTMLInputElement>) => {
    setBarcode(e.currentTarget.value);
  };

  const onChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const onChangeAmount = (e: React.FormEvent<HTMLInputElement>) => {
    setAmount(e.currentTarget.value);
  };

  const onChangePrice = (e: React.FormEvent<HTMLInputElement>) => {
    setPrice(e.currentTarget.value);
  };

  const handleMeasureChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMeasure(e.currentTarget.value as MeasureType);
  };

  const handleAmountType = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === AmountType.granel) {
      setMeasure(MeasureType.kg);
    }
    if (e.currentTarget.value === AmountType.pieza) {
      setMeasure(MeasureType.default);
    }
    setAmountType(e.currentTarget.value as AmountType);
  };

  const handleCategoryOptionChange = (
    e: React.FormEvent<HTMLSelectElement>
  ) => {
    setcategoryOption(e.currentTarget.value);
    setCategoryName(e.currentTarget.value);
  };

  const handleCategoryType = (e: React.FormEvent<HTMLInputElement>) => {
    setCategoryType(e.currentTarget.value);
    setCategoryName('');
  };

  const handleCategoryName = (e: React.FormEvent<HTMLInputElement>) => {
    setCategoryName(e.currentTarget.value);
  };

  const handleClickRegister = () => {
    setBarcode('');
    setName('');
    setAmount(0);
    setPrice('');
    setCategoryName('');
    barcodeInputRef.current?.focus();
  };

  const requiredValues = (...args: Array<string | number>): boolean => {
    // console.log(args);
    // eslint-disable-next-line eqeqeq
    return args.some((value) => !!value === false);
  };

  // life cycle
  /* useEffect(() => {

  }, [InventoryDispatch]); */

  return (
    <>
      <form
        id="regForm"
        className={`regFormC ${barcode && name ? 'isModal' : ''}`}
      >
        <div className="titleForm">
          <h3>Registrar nuevo Producto</h3>
        </div>
        <label className="labelBC" htmlFor="barcodeID">
          <span>Escané el código de barras</span>
          <input
            ref={barcodeInputRef}
            type="text"
            name="barcode"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            id="barcodeID"
            value={barcodeValue}
            disabled={!!barcode}
            onChange={onChangeBarcode}
            required
          />
        </label>
        <label className="labelBC" htmlFor="nameID">
          <span>Nombre del Producto</span>
          <input
            type="text"
            name="name"
            id="nameID"
            value={nameValue}
            disabled={!!name}
            onChange={onChangeName}
            required
          />
        </label>
        <fieldset className="amountGroup">
          <legend>Cantidad</legend>
          <div className="agranelOpieza">
            <label className="amountRadio" htmlFor="pieza">
              <input
                type="radio"
                name="amount"
                id="pieza"
                value="pieza"
                defaultChecked
                onChange={handleAmountType}
                required
              />
              <span>Por pieza</span>
            </label>
            <label className="amountRadio" htmlFor="granel">
              <input
                type="radio"
                name="amount"
                id="granel"
                value="granel"
                onChange={handleAmountType}
              />
              <span>A granel</span>
            </label>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <label className="labelBC" htmlFor="cantidadID">
              <input
                className="amountInput"
                type="number"
                name="amount"
                value={amountValue === 0 ? '' : amountValue}
                placeholder="0"
                id="cantidadID"
                min="0"
                step="any"
                // onFocus={}
                onChange={onChangeAmount}
                required
              />
            </label>
            {amountType === AmountType.granel ? (
              <div className="amountKg">
                <input type="text" value="kg" disabled />
              </div>
            ) : null}
          </div>
        </fieldset>
        <fieldset className="amountGroup">
          <legend>Precio</legend>
          {amountType === AmountType.granel && (
            <div className="agranelOpieza">
              <label className="amountRadio" htmlFor="porKilo">
                <input
                  type="radio"
                  name="measure"
                  id="porKilo"
                  value="kg"
                  defaultChecked
                  onChange={handleMeasureChange}
                  required
                />
                <span>Precio por kilo</span>
              </label>
              <label className="amountRadio" htmlFor="porGramo">
                <input
                  type="radio"
                  name="measure"
                  id="porGramo"
                  value="g"
                  onChange={handleMeasureChange}
                />
                <span>Precio por gramo</span>
              </label>
            </div>
          )}
          <label className="labelBC" htmlFor="precioID">
            <input
              className="priceInput"
              type="number"
              name="price"
              value={price}
              placeholder="00.00"
              id="precioID"
              min="0"
              step="any"
              onChange={onChangePrice}
              required
            />
          </label>
        </fieldset>
        <fieldset className="amountGroup">
          <legend>Categoría</legend>
          <div className="agranelOpieza">
            <label className="amountRadio" htmlFor="existenteID">
              <input
                type="radio"
                name="categoryType"
                id="existenteID"
                value="existente"
                defaultChecked
                onChange={handleCategoryType}
              />
              <span>Categoría existente</span>
            </label>
            <label className="amountRadio" htmlFor="nuevaID">
              <input
                ref={categoryOptionInputRef}
                type="radio"
                name="categoryType"
                id="nuevaID"
                value="nueva"
                onChange={handleCategoryType}
              />
              <span>Nueva Categoría</span>
            </label>
          </div>
          {categoryType === 'existente' && (
            <div className="amountSelectContainer">
              <select
                className="amountSelect"
                name="categoryOption"
                id="categoryOption"
                defaultValue={categoryOption}
                onChange={handleCategoryOptionChange}
              >
                <option disabled>Selecciona una Categoría</option>
                {Array.from(globalState.categories.values()).map((cat) => {
                  return (
                    // eslint-disable-next-line no-underscore-dangle
                    <option key={cat._id} value={cat.name}>
                      {cat.name}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          {categoryType === 'nueva' && (
            <label className="labelBC" htmlFor="categoryID">
              <span>Nombre de la categoría</span>
              <input
                type="text"
                name="category"
                id="categoryID"
                value={categoryName}
                onChange={handleCategoryName}
              />
            </label>
          )}
        </fieldset>
        <button
          className="btnSubmmit"
          type="button"
          disabled={requiredValues(barcodeValue, nameValue, amountValue, price)}
          onClick={handleClickRegister}
        >
          Registrar Producto
        </button>
      </form>
    </>
  );
}

export default RegisterProductForm;
