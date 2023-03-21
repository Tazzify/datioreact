import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProduktSidaUpper from "../components/ProduktSidaUpper";
import ProduktSidaDown from "../components/ProduktSidaDown";
import ProductField from "../components/ProductField";
import ProductShowcaseText from "../components/ProductShowcaseText";

class Produkt extends React.Component {
        render() {
                return (
                        <div>
                                <Header />
                                <Navbar />
                                <ProduktSidaUpper />
                                <ProduktSidaDown />
                                <ProductShowcaseText title="Liknande produkter" />
                                <ProductField />
                        </div>
                );
        }
}

export default Produkt;