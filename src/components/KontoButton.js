import { Link } from 'react-router-dom';

function KontoButton() {
        return (
                <Link to="/LoggaIn" className="form_konto" style={{ textDecoration: 'none' }}>
                        <button type="submit" className="konto">
                                <span className="material-icons-outlined" id="account_icon">person_outline</span>
                                <span id="account_text" >Mitt konto</span>
                        </button>
                </Link>
        );
}

export default KontoButton;
