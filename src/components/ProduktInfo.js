import Reviews from './Reviews';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';

function ProduktInfo() {
  return (
    <div>
      <ProductName name="AMD Ryzen 5 7600" />
      <ProductPrice price="2990" />
      <Reviews />
      <h3>Lagerstatus: <span className="stock_dot_product"></span></h3>
      <h4>
        Antal:
        <input type="number" id="antal" min="1" max="100" value="1" />
      </h4>
    </div>
  );
}

export default ProduktInfo;