import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

class LoggaIn extends React.Component {
        render() {
                return (
                        <div>
                                <div className="header">
                                        <div className="login_logo" >
                                                <Link to="/"><img src="bilder/logotyp_datio_stor_transparent.png" alt="Logotyp" id="datio_logo" /></Link>
                                        </div>
                                </div>
                                <LoginForm />
                        </div>
                );
        }
}

export default LoggaIn;