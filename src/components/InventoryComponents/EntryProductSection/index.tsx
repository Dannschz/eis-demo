import React, { useEffect } from 'react';
// import { useGlobalContext } from '../../../Context/globalState';
import BackButtonLink from '../../Utils/BackButtonLink/BackButtonLink';
import ProductList from '../ProductList';
import './eps.global.scss';

function EntryProductSection() {
  // const { dispatch } = useGlobalContext();

  useEffect(() => {
  }, []);

  return (
    <div className="entryProductSection">
      <BackButtonLink />
      <h2 className="entryTitle">Entrada de Mercancía</h2>
      <ProductList />
    </div>
  );
}

export default EntryProductSection;
