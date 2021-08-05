import { useGlobalContext } from '../../../Context/globalState';
import { MeasureType, ProductMap } from '../../../types/inventory';
import './inventorystate.global.scss';

function InventoryState() {
  const { globalState } = useGlobalContext();
  // console.log(globalState.daySales);

  const inventoryValue = (products: ProductMap): number => {
    let total = 0;
    products.forEach((value) => {
      total +=
        value.measure === MeasureType.g
          ? value.price * 1000 * value.amount
          : value.price * value.amount;
    });
    return total;
  };

  const inexistentProducts = (products: ProductMap): number => {
    let result = 0;
    products.forEach((value) => {
      if (value.amount === 0) result += 1;
    });
    return result;
  };

  const bestSellingProduct = (products: ProductMap) => {
    let max = 0;
    let min = 10000;
    let maxName = '';
    let minNane = '';
    products.forEach((value) => {
      if (value.soldPieces > max) {
        max = value.soldPieces;
        maxName = value.name;
      }
      if (value.soldPieces < min) {
        min = value.soldPieces;
        minNane = value.name;
      }
    });
    return { minNane, maxName };
  };

  return (
    <div className="inventoryState">
      <h2>Estado del Inventario</h2>
      <div className="is-content">
        <span className="isc-item">
          <p className="isci-text">Cantidad de Productos:</p>
          <p className="isci-number">{globalState.products.size}</p>
        </span>
        <span className="isc-item">
          <p className="isci-text">Valor del Inventario:</p>
          <p className="isci-number">${inventoryValue(globalState.products)}</p>
        </span>
        <span className="isc-item">
          <p className="isci-text">Productos sin existencia:</p>
          <p className="isci-number">
            {inexistentProducts(globalState.products)}
          </p>
        </span>
        <span className="isc-item">
          <p className="isci-text">Producto más vendido:</p>
          <p className="isci-number">
            {bestSellingProduct(globalState.products).maxName}
          </p>
        </span>
        <span className="isc-item">
          <p className="isci-text">Producto menos vendido:</p>
          <p className="isci-number">
            {bestSellingProduct(globalState.products).minNane}
          </p>
        </span>
      </div>
    </div>
  );
}

export default InventoryState;
