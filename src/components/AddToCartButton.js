import React from "react";
import { Alert } from "@mui/material";

function AddToCartButton(props) {
        const [showAlert, setShowAlert] = React.useState(false);

        const handleClick = () => {
                setShowAlert(true);
                setTimeout(() => {
                        setShowAlert(false);
                }, 5000);
        };

        if (props.id === "kundvagn_köp_knapp") {
                return (
                        <div className="buy">
                                <div className="produkt_knappar">
                                        <button type="button" id="produkt_köp_knapp">
                                                Gå till kassan
                                        </button>
                                </div>
                        </div>
                );
        }
        else {
                return (
                        <div className="produkt_knappar">
                                {showAlert && <Alert severity="success" style={{ justifyContent: "center" }} >Produkten har lagts till i kundvagnen</Alert>
                                }
                                <button type="button" id="produkt_köp_knapp" onClick={handleClick}>
                                        Lägg i kundvagn
                                </button>

                        </div>
                );
        }
}

export default AddToCartButton;