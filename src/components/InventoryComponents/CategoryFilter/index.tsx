/* eslint-disable no-underscore-dangle */
import { CategoryT } from '../../../types/inventory';
import './styles.global.scss';

type FilterProps = {
  categories: CategoryT[];
  handleCategoryChange(e: React.FormEvent<HTMLSelectElement>): void;
};

function CategoryFilter({ categories, handleCategoryChange }: FilterProps) {
  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    handleCategoryChange(e);
  };

  /* React.useEffect(() => {
    console.log(value);
  }, [value]); */

  return (
    <div className="CategoryFilterStyles">
      <select
        className="amountSelect"
        name="categoryFilter"
        id="categoryFilter"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="">Todas Las Categorías</option>
        {categories.map((cat) => {
          return (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CategoryFilter;
