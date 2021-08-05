import { useEffect, useRef } from 'react';
import './styles.global.scss';

type SearchFieldProps = {
  searchValue: string;
  handleSearchValueChange(e: React.FormEvent<HTMLInputElement>): void;
};

function SearchField({
  searchValue,
  handleSearchValueChange,
}: SearchFieldProps) {
  const textInputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleSearchValueChange(e);
  };

  const handleFocus = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.select();
  };

  useEffect(() => {
    textInputRef.current?.focus();
  }, []);

  return (
    <label htmlFor="productSearch" className="searchProductField">
      <input
        ref={textInputRef}
        type="text"
        name="search"
        id="productSearch"
        value={searchValue}
        placeholder="Buscar Producto: Nombre/Código"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </label>
  );
}

export default SearchField;
