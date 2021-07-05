/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import './bcp.global.scss';

type BarcodePagerProps = {
  pages: number;
  handleSetPageFromParent: (nPage: number) => void;
};

function BarcodePagination({
  pages,
  handleSetPageFromParent,
}: BarcodePagerProps) {
  const [currPage, setCurrPage] = useState(1);

  const handleChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrPage(+e.currentTarget.value);
    handleSetPageFromParent(+e.currentTarget.value);
  };

  return (
    <div className="barcodePagination">
      <ul className="bp-ul">
        {Array.from(Array(pages).keys()).map((num, index) => {
          return (
            <label
              className={`bp-label ${
                num + 1 === currPage ? 'bp-label-active' : ''
              }`}
              key={num}
              htmlFor={num.toString()}
            >
              <p>{num + 1}</p>
              <input
                id={num.toString()}
                className="bp-ul-number"
                type="radio"
                defaultChecked={index === 0}
                name="pagination"
                value={num + 1}
                onChange={handleChangePage}
              />
            </label>
          );
        })}
      </ul>
    </div>
  );
}

export default BarcodePagination;
