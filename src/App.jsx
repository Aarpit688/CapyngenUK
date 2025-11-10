import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ForexBroker from "./pages/ForexBroker";
import CryptoExchange from "./pages/CryptoExchange";
import CryptoBroker from "./pages/CryptoBroker";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/turnkey/forex-broker" element={<ForexBroker />} />
          <Route path="/turnkey/crypto-exchange" element={<CryptoExchange />} />
          <Route path="/turnkey/crypto-broker" element={<CryptoBroker />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
