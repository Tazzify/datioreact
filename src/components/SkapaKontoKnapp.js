import { Link } from "react-router-dom";

function LoginPageButton(props) {
        return (
                <Link to={props.link}>
                        <input id={props.id} type="button" value={props.value} />
                </Link>
        );
}

export default LoginPageButton;





