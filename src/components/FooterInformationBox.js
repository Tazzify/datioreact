import Betalningsmetoder from './Betalningsmetoder';

function FooterInformationBox() {
        return (
                <div className="footer_box">
                        <h2>Information</h2>
                        {/* Using a tag because Footer is not inside the BrowserRouter, and they are not supposed to link to anything.*/}
                        <a className="information_länk" href="#">
                                FAQ - Frågor och Svar
                        </a>
                        <a className="information_länk" href="#">
                                Felanmälan och återköp
                        </a>
                        <a className="information_länk" href="#">
                                Försäljningsvilkor
                        </a>
                        <a className="information_länk" href="#">
                                Företagsförsäljning
                        </a>
                        <a className="information_länk" href="#">
                                Om Datio
                        </a>
                        <Betalningsmetoder />
                </div>
        );

}

export default FooterInformationBox;
