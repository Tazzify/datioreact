import GoBack from "./GoBack";
import { Link } from "react-router-dom";
import LoginPageButton from "./SkapaKontoKnapp";
import CheckboxButton from "./CheckboxButton";
import LoginPageInput from "./LoginPageInput";

function LoginForm() {
        return (
                <div className="main_logga_in">
                        <div className="inloggningsruta">
                                <GoBack
                                        link="/"
                                />
                                <h3 id="logga_in_text">Logga in</h3>

                                <form>

                                        <LoginPageInput
                                                type="email"
                                                required
                                                placeholder="E-postadress"
                                        />
                                        <LoginPageInput
                                                type="password"
                                                required
                                                placeholder="Lösenord"
                                                pattern=".{7,21}"
                                                title="Alla lösenord är 7-21 tecken."
                                        />

                                        <CheckboxButton
                                                text="Kom ihåg mig"
                                        />

                                        <Link to="/">

                                                <LoginPageButton
                                                        id="logga_in_knapp"
                                                        value="Logga in"
                                                        link="/"
                                                />
                                        </Link>
                                </form>

                                <LoginPageButton
                                        id="skapa_konto_knapp"
                                        value="Skapa konto"
                                        link="/SkapaKonto"
                                />


                        </div>
                </div>
        );
}

export default LoginForm;
