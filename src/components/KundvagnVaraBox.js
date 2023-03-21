import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function KundvagnVaraBox(props) {
  const deleteItem = () => {
    const parentElement = document.querySelector(`#cart-item-${props.id}`);
    parentElement.remove();
  };

  const [showAlert, setShowAlert] = React.useState(false);

  const handleClick = () => {
    setShowAlert(true);
    deleteItem(props.id);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <Stack sx={{ width: '100%' }} spacing={3} >
      <div className="cart_item_box" id={`cart-item-${props.id}`}  >

        <div className="cart_product_picture_box"   >
          <Link to="/produkt">
            <img
              src="bilder/1728141-amd-ryzen-65w-5-pib-right-1260x709.webp"
              className="cart_product_image"
              alt="produktbild av produkt X"
            />
          </Link>
        </div>

        <div className="cart_product_info">


          <h3 className="product_name">
            {props.name} <span className="stock_dot_product"></span>
          </h3>
          <h4 className="antal_cart">
            Antal:
            <input type="number" className="antal" min="1" max="100" value="1" />
          </h4>
          <h2 className="cart_item_price">{props.price}:-</h2>
          <div className="delete_box">
            <span className="material-icons-outlined" id="delete" onClick={handleClick}>
              delete_outline
            </span>
          </div>
        </div>
      </div>
      {showAlert && <Alert severity="info" style={{ justifyContent: "center" }} >Produkten {props.name} har tagits bort från kundvagnen.</Alert>
      }
    </Stack>

  );

}

export default KundvagnVaraBox;
