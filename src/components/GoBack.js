import { Link } from "react-router-dom";

function GoBack(props) {
  return (
    <Link to={props.link} className="go_back_mobile">
      &#10094;
    </Link>
  );
}

export default GoBack;