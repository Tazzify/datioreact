import AddToCartButton from './AddToCartButton';
import ProduktInfo from './ProduktInfo';
import LikeButton from './LikeButton';


function ProduktBeställningsBox() {

        return (
                <div className="produkt_beställning_box">
                        <LikeButton />
                        <ProduktInfo />
                        <AddToCartButton />
                </div>
        );
}

export default ProduktBeställningsBox;