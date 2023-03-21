import { ProcessorInfo, DiverseInfo, AllmäntInfo } from "./TabellData";

import Tabell from "./Tabell";

function ProduktSpecifikationerBox() {
  return (
    <div className="produkt_specifikationer">
      <h2>Tekniska specifikationer</h2>
      <br />
      <Tabell header="Processor" rows={ProcessorInfo} />
      <br />
      <br />
      <br />
      <Tabell header="Diverse" rows={DiverseInfo} />
      <br />
      <br />
      <br />
      <Tabell header="Allmänt" rows={AllmäntInfo} />
    </div>
  );
}

export default ProduktSpecifikationerBox;