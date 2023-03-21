function Fakta() {
        return (
                <div className="fakta">
                        <ul>
                                <li className="fakta_text1">Fri frakt vid köp över 499kr</li>
                                <li>2-3 dagars leveranstid</li>
                                <li>30 dagars öppet köp</li>
                                <li>Kunnig kundsupport</li>
                                <li><button className="facts_button">Våra tjänster</button></li>
                                <li>
                                        <button className="facts_button" id="facts_support">
                                                <span className="material-icons-outlined" id="support_agent_icon">support_agent</span>
                                                <h5>Kundservice</h5>
                                        </button>
                                </li>
                        </ul>
                </div>
        );
}

export default Fakta;