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
import B2Connect from "./pages/B2Connect";
import Pamm from "./pages/Pamm";
import Mam from "./pages/Mam";
import Capmarket from "./pages/Capmarket";
import VertexFx from "./pages/VertexFx";
import MT5 from "./pages/MT5";
import CTrader from "./pages/CTrader";
import ScrollToTop from "./components/ScrollToTop";
import Sirix from "./pages/Sirix";
import ArkTrading from "./pages/ArkTrading";
import NTrader from "./pages/NTrader";
import CTraderService from "./pages/CTraderService";
import CapmarketService from "./pages/CapmarketService";
import MT5Service from "./pages/MT5Service";
import OneZeroService from "./pages/OneZeroService";
import ContactUs from "./pages/ContactUs";
import PrimeXMService from "./pages/PrimeXMService";
import Careers from "./pages/Careers";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
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
          <Route path="/products/b2connect" element={<B2Connect />} />
          <Route path="/products/pamm" element={<Pamm />} />
          <Route path="/products/mam" element={<Mam />} />

          <Route path="/platforms/capmarket" element={<Capmarket />} />
          <Route path="/platforms/vertexfx" element={<VertexFx />} />
          <Route path="/platforms/sirix" element={<Sirix />} />
          <Route path="/platforms/ark-trading" element={<ArkTrading />} />
          <Route path="/platforms/mt5" element={<MT5 />} />
          <Route path="/platforms/ctrader" element={<CTrader />} />
          <Route path="/platforms/ntrader" element={<NTrader />} />

          <Route
            path="/services/ctrader-service"
            element={<CTraderService />}
          />

          <Route
            path="/services/capmarket-service"
            element={<CapmarketService />}
          />
          <Route path="/services/mt5-service" element={<MT5Service />} />
          <Route
            path="/services/onezero-service"
            element={<OneZeroService />}
          />
          <Route
            path="/services/primexm-xcore-service"
            element={<PrimeXMService />}
          />

          <Route path="/company/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
