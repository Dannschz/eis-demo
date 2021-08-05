import { useState } from 'react';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import editIcon from '../../../img/edit.svg';
import deleteIcon from '../../../img/trash.svg';
import { MeasureType } from '../../../types/inventory';
import EntryProductModal from '../EntryProductModal';
import EditProductModal from '../EditProductModal';
import ConfirmationMessage from '../../Utils/ConfirmationMessage';
import './styles.global.scss';

const EditTooltip = withStyles((theme) => ({
  tooltip: {
    fontSize: theme.typography.pxToRem(16),
    backgroundColor: '#303942',
  },
}))(Tooltip);

type ProductPostMongo = {
  productId: string;
  barcode: string;
  name: string;
  price: number;
  soldPieces: number;
  amount: number;
  amountType: string;
  measure: string;
  categoryId?: string;
  categoryName?: string;
  showEAD?: boolean;
  entryProduct?: boolean;
};

function Product({
  productId,
  barcode,
  name,
  price,
  soldPieces,
  amount,
  amountType,
  measure,
  categoryId = '',
  categoryName,
  showEAD = false,
  entryProduct = true,
}: ProductPostMongo) {
  const [showEntryModal, setEntryModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmMessage, setCofirmMessage] = useState(false);

  const showConfirmMessageModal = () => {
    setCofirmMessage(true);
  };

  const handleDelete = () => {
    setCofirmMessage(false);
  };

  const handleClickProduct = () => {
    setEntryModal(true);
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleCancelModalButton = () => {
    setEntryModal(false);
  };

  /* useEffect(() => {
    console.log('me renderice');
  }, []); */

  return (
    <>
      <div
        className={`Product ${showEAD ? 'showOpts' : 'setCursor hideOpts'} ${
          amount === 0 ? 'setRed' : ''
        }`}
        role="button"
        onClick={showEAD ? () => null : handleClickProduct}
      >
        <div className="barC">
          <span className="bar" />
        </div>
        <p className="p-item Pname">{name}</p>
        <p className="p-item">{categoryName}</p>
        <p className="p-item barcodeS">{barcode}</p>
        <p className="p-item">
          $ {measure === MeasureType.g ? price * 1000 : price}
        </p>
        <p className="p-item">
          {amountType === 'pieza'
            ? amount > 1
              ? `${amount} ${amountType}s`
              : `${amount} ${amountType}`
            : `${amount.toFixed(3)} kg`}
        </p>
        {showEAD && (
          <>
            <EditTooltip title="Editar" placement="top">
              <button
                type="button"
                className="Icon editIcon"
                onClick={handleEdit}
              >
                <img src={editIcon} alt="Edit product" />
              </button>
            </EditTooltip>
            <EditTooltip title="Eliminar" placement="top">
              <button
                type="button"
                className="Icon trashIcon"
                onClick={showConfirmMessageModal}
              >
                <img src={deleteIcon} alt="Delete product" />
              </button>
            </EditTooltip>
          </>
        )}
      </div>
      {showEntryModal && (
        <EntryProductModal
          id={productId}
          barcode={barcode}
          name={name}
          amount={amount}
          amountType={amountType}
          measure={measure}
          price={price}
          soldPieces={soldPieces}
          categoryId={categoryId}
          entryProduct={entryProduct}
          handleCancelButtonFromParent={handleCancelModalButton}
        />
      )}
      {showEditModal && (
        <EditProductModal
          productId={productId}
          barcode={barcode}
          name={name}
          amount={amount}
          amountType={amountType}
          measure={measure}
          price={price}
          soldPieces={soldPieces}
          categoryId={categoryId}
          closeEditModalFromParent={() => setShowEditModal(false)}
        />
      )}
      {showConfirmMessage && (
        <ConfirmationMessage
          handleOkButton={handleDelete}
          handleCancelButton={() => setCofirmMessage(false)}
        />
      )}
    </>
  );
}

export default Product;
