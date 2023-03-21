import ProductBox from './ProduktBox';

function ProductGrid() {
        return (
                <div className="product_grid">
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <a href='index.html' className="next_products">&#10095;</a>
                </div>
        );
}

export default ProductGrid;