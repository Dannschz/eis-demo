import { useEffect } from 'react';
import { BarcodesArray } from '../../../types/inventory';
import BarcodeItem from '../BarcodeItem';
import './list.global.scss';

type BarcodeListProps = {
  barcodes: BarcodesArray;
  id: string;
};

function BarcodeList({ barcodes, id }: BarcodeListProps) {
  useEffect(() => {
  }, []);

  return (
    <div id={id} className="barcodeList">
      {barcodes.map((barcode) => {
        return barcode ? (
          <BarcodeItem
            key={barcode.barcode}
            name={barcode.name}
            barcode={barcode.barcode}
          />
        ) : null;
      })}
    </div>
  );
}

export default BarcodeList;
