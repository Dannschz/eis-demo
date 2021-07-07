import { useState } from 'react'
// import { useGlobalContext } from '../../../Context/globalState'
import ProductList from '../ProductList'
import BackButtonLink from '../../Utils/BackButtonLink/BackButtonLink'
import InfoMessage from '../../Utils/InfoMessage'
import './styles.global.scss'
import { inventario } from '../../../utils/strRoutes'

function EditSection() {
  const [showDeletedMessage, setShowDeletedMessage] = useState({
    message: '',
    show: false
  })
  const [showEditedMessage, setShowEditedMessage] = useState({
    message: '',
    show: false
  })
  // const { dispatch } = useGlobalContext();

  return (
    <section className="EditSection">
      {/* agregar filtro de categorias */}
      {showDeletedMessage.show && (
        <InfoMessage
          message="El producto se eliminó correctamente"
          setValue={setShowDeletedMessage}
        />
      )}
      {showEditedMessage.show && (
        <InfoMessage
          message="El producto se édito correctamente"
          setValue={setShowEditedMessage}
        />
      )}
      <BackButtonLink to={inventario} />
      <ProductList showOptions={true} />
    </section>
  )
}

export default EditSection
