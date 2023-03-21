import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

class SkapaKonto extends React.Component {
        render() {
                return (
                        <div>
                                <div className="header">
                                        <div className="login_logo" >
                                                <Link to="/"><img src="bilder/logotyp_datio_stor_transparent.png" alt="Logotyp" id="datio_logo" /></Link>
                                        </div>
                                </div>
                                <RegisterForm />
                        </div>
                );
        }
}

export default SkapaKonto;