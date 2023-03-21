import { Link } from 'react-router-dom';
import SearchForm from './SearchComponent';
import KontoButton from './KontoButton';
import KundvagnButton from './KundvagnButton';
import MobileMenuButton from './MobileMenuButton';
import HorizontalSpace from './HorizontalSpace';

function Header(props) {
  if (props.id === "header_in_cart") {
    return (
      <div className="header" id={props.id}>
        <Link to="/"><img src="bilder/logotyp_datio_stor_transparent.png" alt="Logotyp" id="datio_logo" /></Link>
        <MobileMenuButton />
        <HorizontalSpace width="54%" />
        <KontoButton />
      </div>
    );
  }
  else {
    return (
      <div className="header" id={props.id}>
        <Link to="/"><img src="bilder/logotyp_datio_stor_transparent.png" alt="Logotyp" id="datio_logo" /></Link>
        <MobileMenuButton />
        <SearchForm />
        <KontoButton />
        <KundvagnButton />
      </div>
    );

  }
}

export default Header; 
