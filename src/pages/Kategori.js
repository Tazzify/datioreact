import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FilterSection from "../components/FilterSection";
import ProductSort from "../components/ProductSort";
import ProductCategoryField from "../components/ProductCategoryField";

class Kategori extends React.Component {
        render() {
                return (
                        <div className="product_category_page">
                                <Header />
                                <Navbar />
                                <h3 class="product_category_type_text">Kategorier/Datorer/Datorkomponenter</h3>
                                <FilterSection />
                                <ProductSort />
                                <ProductCategoryField />
                        </div>
                );
        }
}

export default Kategori;