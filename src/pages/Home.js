import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SlidesBox from "../components/Slideshow";
import Fakta from "../components/Fakta";
import ProductField from "../components/ProductField";
import ProductShowcaseText from "../components/ProductShowcaseText";

function Home() {
        return (
                <div className="main">
                        <Header />
                        <Navbar />
                        <SlidesBox />
                        <Fakta />
                        <ProductShowcaseText title="Populära produkter" />
                        <ProductField />
                        <ProductShowcaseText title="Nya produkter" />
                        <ProductField />
                        <ProductShowcaseText title="Utvalda produkter" />
                        <ProductField />
                </div>
        );
}

export default Home;