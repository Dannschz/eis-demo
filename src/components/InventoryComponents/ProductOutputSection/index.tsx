import React, { useEffect } from 'react';
// import { useGlobalContext } from '../../../Context/globalState';
import BackButtonLink from '../../Utils/BackButtonLink/BackButtonLink';
import ProductList from '../ProductList';
import './pos.global.scss';

function ProductOutputSection() {
  // const { dispatch } = useGlobalContext();

  useEffect(() => {
  }, []);
  return (
    <section className="productOutputSection">
      <h2>Salida de Mercancía</h2>
      <ProductList entryProduct={false} />
      <BackButtonLink />
    </section>
  );
}

export default ProductOutputSection;
