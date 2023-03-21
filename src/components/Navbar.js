import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li className="dropdown" id="menu_link2">
          <Link to="/Kategori" id="menu_link"><span className="material-icons-outlined" id="menu_icon">menu</span></Link>
          <Link to="/Kategori" className="dropdown-knapp" id="all_categories_text">Alla kategorier &#8964;</Link>
        </li>
        <li className="dropdown">
          <Link to="/Kategori" className="dropdown-knapp">Datorer</Link>
        </li>
        <li className="dropdown">
          <Link to="/kategori" className="dropdown-knapp">Bildskärmar</Link>
        </li>
        <li className="dropdown">
          <Link to="/Kategori" className="dropdown-knapp">Hem/fritid</Link>
        </li>
        <li className="dropdown">
          <Link to="/Kategori" className="dropdown-knapp">Kameror</Link>
        </li>
        <li className="dropdown">
          <Link to="/Kategori" className="dropdown-knapp">Kontor</Link>
        </li>
        <li className="dropdown">
          <Link to="/Kategori" className="dropdown-knapp">Mobil</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
