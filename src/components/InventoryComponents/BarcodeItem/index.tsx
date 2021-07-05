import { useEffect } from 'react';
import JsBarcode from 'jsbarcode';
import './item.global.scss';

type BarcodeItemProps = {
  name: string;
  barcode: string;
};

function BarcodeItem({ name, barcode }: BarcodeItemProps) {
  useEffect(() => {
    JsBarcode(`#${name.replace(/\s+/g, '')}`, barcode, {
      format: 'EAN13',
    });
  });

  return (
    <div className="barcodeItem">
      <p className="bname">{name}</p>
      <svg className="bcsvg" id={name.replace(/\s+/g, '')} />
    </div>
  );
}

export default BarcodeItem;
