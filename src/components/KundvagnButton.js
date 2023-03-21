import { Link } from "react-router-dom";

function KundvagnButton() {
        return (
                <Link to="/Kundvagn" className="form_kundvagn">
                        <button type="submit" className="kundvagn">
                                <span className="material-icons-outlined" id="shopping_cart_icon">shopping_cart</span>
                        </button>
                </Link>
        );
}

export default KundvagnButton;
