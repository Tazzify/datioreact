import ProduktVideos from './Videos';

function ProduktBeskrivningBox() {
        return (
                <div className="produkt_beskrivning_box">
                        <h2>Produktbeskrivning</h2>
                        <br />
                        <p className="produkt_beskrivning_text">
                                <span className="bold">Kraftfull prestanda</span>
                                <br />
                                Nya AMD Ryzen 5 7600 processorn driver de mest krävande spelen och laddar tunga arbetsuppgifter som videorendering snabbare.
                                Processorn har utrustats med 6 st kärnor, 12 st trådar, boost på upp till 5,1 GHz och 38 MB cache. Allt du behöver för bättre spelprestanda och snabbare arbetsflöden.
                        </p>
                        <br />

                        <p className="produkt_beskrivning_text">
                                <span className="bold">Stöd för DDR5</span>
                                <br />
                                Med den senaste DDR-standarden (DDR5) erbjuder Ryzen 7000-serien en extra boost i prestanda, speciellt ifall du arbetar med stora videofiler och foton. Processorn stöder RAM-minnen med en frekvens på upp till 5200MHz.
                        </p>
                        <br />

                        <p className="produkt_beskrivning_text">
                                <span className="bold">De senaste teknologierna</span>
                                <br />
                                7:e generationens Ryzen-processorer har stöd för PCIe 5.0 lagringstöd, AMDs EXPO-teknik, Precision Boost 2 och Precision Boost Overdrive. Överklocka enkelt processorn i AMDs Ryzen Master-verktyg med nya one-click överklockning.
                        </p>
                        <br />
                        <h2>Produktvideor</h2>

                        <ProduktVideos />
                </div>
        );
}

export default ProduktBeskrivningBox;