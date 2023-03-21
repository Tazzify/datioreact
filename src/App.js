/* import React from 'react'; */
import Home from './pages/Home';
import Kategori from './pages/Kategori';
import Produkt from './pages/Produkt';
import MiniHeader from './components/MiniHeader';
import Kundvagn from './pages/Kundvagn';
import LoggaIn from './pages/LoggaIn';
import SkapaKonto from './pages/SkapaKonto';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <MiniHeader />
      <div className="content-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Kategori" element={<Kategori />} />
            <Route path="/Produkt" element={<Produkt />} />
            <Route path="/Kundvagn" element={<Kundvagn />} />
            <Route path="/LoggaIn" element={<LoggaIn />} />
            <Route path="/SkapaKonto" element={<SkapaKonto />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div >
  );
}

export default App;
