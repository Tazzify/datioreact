import ProductBox from './ProduktBox';

function ProductGrid() {
        return (
                <div className="product_grid">
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <ProductBox />
                        <a href='https://witty-plant-001cc2d03.2.azurestaticapps.net/' className="next_products" style={{textDecoration:"none"}} >&#10095;</a>
                </div>
        );
}

export default ProductGrid;