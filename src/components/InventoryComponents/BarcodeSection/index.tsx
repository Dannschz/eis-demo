import { useEffect, useState } from 'react'
// import { saveAs } from 'file-saver';
// import domtoimage from 'dom-to-image';
import { BarcodesArray } from '../../../types/inventory'
import btnBarcodeIcon from '../../../img/barcodebtn.svg'
import pdfIcon from '../../../img/pdf-file.svg'
import BarcodeList from '../BarcodeList'
import './barcode.scss'
import BarcodeCreateModal from '../BarcodeCreateModal'
import BackButtonLink from '../../Utils/BackButtonLink/BackButtonLink'
import UsefulButton from '../../Utils/UsefulButton'
import BarcodePagination from '../BarcodePagination'
import { inventario } from '../../../utils/strRoutes'

function BarcodeSection() {
  const [barcodes, setBarcodes] = useState<BarcodesArray>([])
  const [showGenModal, setShowGenModal] = useState(false)
  const [pageSelected, setPage] = useState(1)

  const maxItems = 24

  const pages = Math.ceil(barcodes.length / maxItems)

  const handleGenCodeButton = () => {
    setShowGenModal(!showGenModal)
  }

  const handleCloseModal = () => {
    setShowGenModal(false)
  }

  const handleSetPage = (nPage: number) => {
    setPage(nPage)
  }

  const handleSavePdfButton = () => {
    /* const htmlContent =
      document.getElementById(`barcodeList${pageSelected}`) ??
      new HTMLElement(); */
    /* domtoimage
      .toBlob(htmlContent)
      .then((data) => {
        saveAs(data, `códigos-${pageSelected}.png`);
      })
      .catch((error) => {
        throw new Error(error);
      }); */
    // console.log(htmlContent);
  }

  const printBarcodeList = (pageNum: number): React.ReactNode => {
    const from = pageNum * maxItems - maxItems
    const to = pageNum * maxItems
    return (
      <BarcodeList
        id={`barcodeList${pageSelected}`}
        barcodes={barcodes.map((item, index) => {
          if (index >= from && index < to) {
            return item
          }
          return null
        })}
      />
    )
  }

  useEffect(() => {}, [])

  return (
    <div className='section barcodeSection'>
      <div className='btnOptions'>
        <UsefulButton
          img={btnBarcodeIcon}
          fontSize={1}
          color='#562b8f'
          width={30}
          handleClick={handleGenCodeButton}
        >
          Crear código
        </UsefulButton>
        <UsefulButton
          img={pdfIcon}
          fontSize={1}
          color='#c43232'
          width={30}
          handleClick={handleSavePdfButton}
        >
          Guardar Página
        </UsefulButton>
      </div>
      {printBarcodeList(pageSelected)}
      {showGenModal && (
        <BarcodeCreateModal
          barcodes={barcodes}
          handleCloseModalFromParent={handleCloseModal}
        />
      )}
      <BarcodePagination
        pages={pages}
        handleSetPageFromParent={handleSetPage}
      />
      <BackButtonLink to={inventario} />
    </div>
  )
}

export default BarcodeSection
