import Betalningsmetoder from './Betalningsmetoder';

function FooterInformationBox() {
        return (
                <div className="footer_box">
                        <h2>Information</h2>
                        {/* Using a tag because Footer is not inside the BrowserRouter, and they are not supposed to link to anything.*/}
                        <a className="information_länk" href="https://witty-plant-001cc2d03.2.azurestaticapps.net/">
                                FAQ - Frågor och Svar
                        </a>
                        <a className="information_länk" href="https://witty-plant-001cc2d03.2.azurestaticapps.net/">
                                Felanmälan och återköp
                        </a>
                        <a className="information_länk" href="https://witty-plant-001cc2d03.2.azurestaticapps.net/">
                                Försäljningsvilkor
                        </a>
                        <a className="information_länk" href="https://witty-plant-001cc2d03.2.azurestaticapps.net/">
                                Företagsförsäljning
                        </a>
                        <a className="information_länk" href="https://witty-plant-001cc2d03.2.azurestaticapps.net/">
                                Om Datio
                        </a>
                        <Betalningsmetoder />
                </div>
        );
}

export default FooterInformationBox;
