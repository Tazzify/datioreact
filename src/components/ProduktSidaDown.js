import ProduktBeskrivningBox from './ProduktBeskrivningBox';
import ProduktSpecifikationerBox from './ProduktSpecifikationerBox';

function ProduktSidaDown() {
        return (
                <div className="produkt_sida_down">
                        <ProduktBeskrivningBox />
                        <ProduktSpecifikationerBox />
                </div>
        );
}

export default ProduktSidaDown;