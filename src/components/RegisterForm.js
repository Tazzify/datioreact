import GoBack from "./GoBack";
import { Link } from "react-router-dom";
import LoginPageButton from "./SkapaKontoKnapp";
import CheckboxButton from "./CheckboxButton";
import LoginPageInput from "./LoginPageInput";


function RegisterForm() {
        return (
                <div className="main_logga_in">
                        <div className="inloggningsruta">
                                <GoBack
                                        link="/LoggaIn"
                                />
                                <h3 id="logga_in_text">Skapa nytt konto</h3>

                                <form action="index.html" >
                                        <LoginPageInput
                                                type="email"
                                                required
                                                placeholder="E-postadress"
                                        />

                                        <LoginPageInput
                                                type="password"
                                                required
                                                placeholder="Lösenord (OBS: ange INTE ett riktigt lösenord)"
                                                pattern=".{7,21}"
                                                title="Lösenordet måste vara mellan 7-21 tecken."

                                        />

                                        <LoginPageInput
                                                type="password"
                                                required
                                                placeholder="Upprepa lösenordet (notera att inget sparas:- mockup)"
                                                pattern=".{7,21}"
                                                title="Lösenordet måste vara mellan 7-21 tecken."
                                        />

                                        <CheckboxButton
                                                text="Jag accepterar "
                                                onvalid="this.setCustomValidity('Du måste godkänna medlemsvillkoren för att skapa ett konto.')"
                                                id="medlemsvillkoren"
                                        />

                                        <Link to="/">

                                                <LoginPageButton
                                                        id="skapa_konto_knapp"
                                                        value="Skapa konto"
                                                        link="/"
                                                />
                                        </Link>
                                </form>
                        </div>
                </div>
        );
}

export default RegisterForm;

