
function FooterContactBox() {
        return (
                <div className="footer_box" id="kontakt_box">
                        <h2>Kontakt</h2>
                        <h3 className="footer_text">
                                <span
                                        className="material-icons-outlined"
                                        id="email_icon"
                                >
                                        email
                                </span>
                                info@datio.nu
                        </h3>
                        <br />
                        <h3 className="footer_text">
                                <span
                                        className="material-icons-outlined"
                                        id="phone_icon"
                                >
                                        phone
                                </span>
                                073 725 85 99
                        </h3>
                        <br />
                        <br />
                        <h4>Måndag - Fredag: 09-18</h4>
                        <h4>Lördag: 11 - 16</h4>
                        <h4>Söndag: Stängt</h4>
                </div>
        );
}

export default FooterContactBox;

