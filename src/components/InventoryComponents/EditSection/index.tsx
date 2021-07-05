/* eslint-disable react/jsx-boolean-value */
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../../../Context/globalState';
import ProductList from '../ProductList';
import BackButtonLink from '../../Utils/BackButtonLink/BackButtonLink';
import InfoMessage from '../../Utils/InfoMessage';
import './styles.global.scss';

function EditSection() {
  const [showDeletedMessage, setShowDeletedMessage] = useState(false);
  const [showEditedMessage, setShowEditedMessage] = useState(false);
  // const { dispatch } = useGlobalContext();

  useEffect(() => {
    
  }, []);

  function showProductDeleteMessage(): React.ReactNode {
    if (showDeletedMessage) {
      setTimeout(() => {
        setShowDeletedMessage(false);
      }, 3000);
      return <InfoMessage message="El producto se elimino correctamente" />;
    }
    return null;
  }

  function showProductEditMessage(): React.ReactNode {
    if (showEditedMessage) {
      setTimeout(() => {
        setShowEditedMessage(false);
      }, 3000);
      return <InfoMessage message="El producto se édito correctamente" />;
    }
    return null;
  }

  return (
    <section className="EditSection">
      {/* agregar filtro de categorias */}
      {showProductDeleteMessage()}
      {showProductEditMessage()}
      <BackButtonLink />
      <ProductList showOptions={true} />
    </section>
  );
}

export default EditSection;
