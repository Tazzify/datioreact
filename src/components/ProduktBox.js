import { Link } from 'react-router-dom';

function ProductBox() {
  return (
    <div className="produkt_box">
      <Link to="/produkt">
        <img src="bilder/ryzen_transparent_s.png" alt="Produktbild av produkt x" />
        <h2>AMD Ryzen 5 7600</h2>
        <h3>2990 kr</h3>
        <h4 className="stock_text">
          <span className="stock_dot"></span> i lager: 9
        </h4>
      </Link>
    </div>
  );
}

export default ProductBox;
