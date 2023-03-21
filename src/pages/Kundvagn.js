import React from "react";
import Navbar from "../components/Navbar";
import ProductField from "../components/ProductField";
import ProductShowcaseText from "../components/ProductShowcaseText";
import Header from "../components/Header";
import KundvagnVaraBox from "../components/KundvagnVaraBox";
import Voucher from "../components/Voucher";
import CartSum from "../components/CartSum";
import AddToCartButton from "../components/AddToCartButton";


class Kundvagn extends React.Component {
  render() {

    return (
      <div className="cart_page">
        <Header id="header_in_cart" />
        <Navbar />
        <h3 class="product_category_type_text">Kundvagn</h3>

        <KundvagnVaraBox

          name="AMD Ryzen 5 7600"
          price="999"
          id="1"
        />
        <KundvagnVaraBox
          name="AMD Ryzen 5 7600X"
          price="1 999"
          id="2"
        />

        <KundvagnVaraBox
          name="AMD Ryzen 5 7600X^2"
          price="2 999"
          id="3"
        />

        <Voucher />

        <CartSum
          total="5 997"

        />
        <AddToCartButton
          id="kundvagn_köp_knapp"
        />

        <ProductShowcaseText
          title="Rekommenderade produkter"
        />
        <ProductField />
      </div>

    );
  }
}

export default Kundvagn;
