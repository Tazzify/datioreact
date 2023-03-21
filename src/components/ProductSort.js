import SortOptions from './SortOptions';
import ProduktVy from './ProduktVy';

function ProductSort() {
  return (
    <div className="product_sort">
      <h4 className='amount_products'>Visar: 24 produkter</h4>
      <ProduktVy />
      <SortOptions />

    </div>
  );
}

export default ProductSort;