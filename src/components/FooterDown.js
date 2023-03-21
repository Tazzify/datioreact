import Nyhetsbrev from "./Nyhetsbrev";
import SocialaMedierBox from "./SocialaMedierBox";
import CopyrightComponent from "./CopyrightComponent";

function FooterDown() {
        return (
                <div className="footer_down">
                        <div className="footer_box" id="sociala_medier_box">
                                <h2>Följ oss</h2>
                                <SocialaMedierBox />
                                <Nyhetsbrev />
                                <CopyrightComponent
                                        year="2023"
                                        company="Datio"
                                />
                        </div>
                </div>
        );
}

export default FooterDown;
