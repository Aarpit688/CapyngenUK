import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ForexBroker from "./pages/ForexBroker";
import CryptoExchange from "./pages/CryptoExchange";
import CryptoBroker from "./pages/CryptoBroker";
import LiquidityProvider from "./pages/LiquidityProvider";
import B2Trader from "./pages/B2Trader";
import B2Core from "./pages/B2Core";
import B2Copy from "./pages/B2Copy";

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
          <Route
            path="/turnkey/liquidity-provider"
            element={<LiquidityProvider />}
          />
          <Route path="/products/b2trader" element={<B2Trader />} />
          <Route path="/products/b2core" element={<B2Core />} />
          <Route path="/products/b2copy" element={<B2Copy />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
