import ProduktBildBox from './ProduktBildBox';
import ProduktBeställningsBox from './ProduktBeställningsBox';

function ProduktSidaUpper() {
  return (
    <div className="produkt_sida_upper">
      <ProduktBildBox />
      <ProduktBeställningsBox />

    </div>
  );
}

export default ProduktSidaUpper;