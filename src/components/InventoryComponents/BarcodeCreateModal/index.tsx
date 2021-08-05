/* eslint-disable no-underscore-dangle */
import { useEffect, useRef, useState } from 'react';
import JsBarcode from 'jsbarcode';
import './modal.global.scss';
import barcodeGenerator from '../../../utils/barcodegen';
import { useGlobalContext } from '../../../Context/globalState';
import RegisterProductModal from '../RegisterProductModal';
import { BarcodesArray } from '../../../types/inventory';

type BarcodeCreateModalProps = {
  barcodes: BarcodesArray;
  handleCloseModalFromParent: () => void;
};

function BarcodeCreateModal({
  barcodes,
  handleCloseModalFromParent,
}: BarcodeCreateModalProps) {
  const [nameValue, setNameValue] = useState('');
  const [barcodeValue, setBarcodeValue] = useState('');
  const [barcodeMessage, setBarcodeMessage] = useState('');
  const [showBarcodeMessage, setShowMessage] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const { globalState } = useGlobalContext();
  const validateName = new RegExp(/[A-Za-z]/i);

  const handleNameValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (validateName.test(e.currentTarget.value)) {
      setNameValue(e.currentTarget.value);
    } else {
      setNameValue('');
    }
  };

  function getBarcodeText(data: Array<{ text: string }>): string {
    const barcodeText = data.map((o) => o.text);
    return barcodeText.join('');
  }

  const genCodeButton = () => {
    const newBarcode = barcodeGenerator();
    const bc = JsBarcode(`#${nameValue.replace(/\s+/g, '')}`, newBarcode, {
      format: 'EAN13',
    });
    setBarcodeValue(getBarcodeText(bc._encodings[0]));
    if (
      globalState.products.has(newBarcode) ||
      barcodes.some((barcode) => barcode?.barcode === newBarcode)
    ) {
      setBarcodeMessage('Existe un producto con ese código, genera otro');
      setShowMessage(true);
      setButtonDisabled(true);
    } else {
      setShowMessage(false);
      setButtonDisabled(false);
    }
    // setBarcodeValue(bc._encodings[0][0].text);
  };

  const handleCancelButton = () => {
    handleCloseModalFromParent();
  };

  const handleSaveButton = (): void => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <>
      <div className="barcodeCreateModal">
        <h2>Crear código</h2>
        <label className="nameLBC" htmlFor="inputNameProduct">
          <p>Nombre del producto</p>
          <input
            ref={nameInputRef}
            type="text"
            name="productName"
            id="inputNameProduct"
            value={nameValue}
            onChange={handleNameValueChange}
            onFocus={(e) => {
              e.currentTarget.select();
            }}
          />
        </label>
        <button
          className="btnGenCodeModal"
          type="button"
          disabled={!nameValue}
          onClick={genCodeButton}
        >
          Generar Código
        </button>
        <svg className="svgI" id={nameValue.replace(/\s+/g, '')} />
        {showBarcodeMessage && <p className="message">{barcodeMessage}</p>}
        <div className="buttons">
          <button
            className="btn btnCancel"
            type="button"
            onClick={handleCancelButton}
          >
            Cancelar
          </button>
          <button
            className="btn btnSave"
            type="button"
            disabled={buttonDisabled}
            onClick={handleSaveButton}
          >
            Guardar
          </button>
        </div>
      </div>
      {showRegisterModal && (
        <RegisterProductModal
          barcode={barcodeValue}
          name={nameValue}
          closeRegisterModal={closeRegisterModal}
          handleCloseGenModal={handleCloseModalFromParent}
        />
      )}
    </>
  );
}

export default BarcodeCreateModal;
