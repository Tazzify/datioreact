import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

function DarkModeToggle() {
        const [isDarkMode, setIsDarkMode] = useState(false);

        const handleDarkModeToggle = () => {
                const darkmode = document.querySelectorAll('.header, .form_search, .content-container, .produkt_beställning_box, .produkt_sida_upper, .produkt_beskrivning_box, .produkt_specifikationer, .produkt_sida_down');
                const darkmodeDark = document.querySelectorAll('.main-container, .produkt_box, body');
                const darkmodeLight = document.querySelectorAll('.produkt_box, .next_products, .sök_knapp, .search, .konto, .kundvagn, .product_category_box');
                const darkmodeLightColor = document.querySelectorAll('.product_showcase_type_text, .produkt_beskrivning_text, .produkt_specifikationer, .produkt_beställning_box',);
                const darkmodeDarkColor = document.querySelectorAll('.produkt_specifikationer');

                for (let i = 0; i < darkmode.length; i++) {
                        darkmode[i].classList.toggle('dark-mode');
                }
                for (let i = 0; i < darkmodeDark.length; i++) {
                        darkmodeDark[i].classList.toggle('dark-mode-dark');
                }
                for (let i = 0; i < darkmodeLight.length; i++) {
                        darkmodeLight[i].classList.toggle('dark-mode-light');
                }
                for (let i = 0; i < darkmodeLightColor.length; i++) {
                        darkmodeLightColor[i].classList.toggle('dark-mode-light-color');
                }
                for (let i = 0; i < darkmodeDarkColor.length; i++) {
                        darkmodeDarkColor[i].classList.toggle('dark-mode-dark-color');
                }
                setIsDarkMode(!isDarkMode);
        };

        return (
                <div className="darkmode" onClick={handleDarkModeToggle}>
                        <ThemeToggle />
                </div>
        );
}

export default DarkModeToggle;
