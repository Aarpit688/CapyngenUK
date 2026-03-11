import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Static components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy pages
const Homepage = lazy(() => import("./pages/Homepage"));

const ForexBroker = lazy(() => import("./pages/ForexBroker"));
const CryptoExchange = lazy(() => import("./pages/CryptoExchange"));
const CryptoBroker = lazy(() => import("./pages/CryptoBroker"));
const LiquidityProvider = lazy(() => import("./pages/LiquidityProvider"));

const B2Trader = lazy(() => import("./pages/B2Trader"));
const B2Core = lazy(() => import("./pages/B2Core"));
const B2Copy = lazy(() => import("./pages/B2Copy"));
const B2Connect = lazy(() => import("./pages/B2Connect"));
const Pamm = lazy(() => import("./pages/Pamm"));
const Mam = lazy(() => import("./pages/Mam"));

const Capmarket = lazy(() => import("./pages/Capmarket"));
const VertexFx = lazy(() => import("./pages/VertexFx"));
const Sirix = lazy(() => import("./pages/Sirix"));
const ArkTrading = lazy(() => import("./pages/ArkTrading"));
const MT5 = lazy(() => import("./pages/MT5"));
const CTrader = lazy(() => import("./pages/CTrader"));
const NTrader = lazy(() => import("./pages/NTrader"));

const CTraderService = lazy(() => import("./pages/CTraderService"));
const CapmarketService = lazy(() => import("./pages/CapmarketService"));
const MT5Service = lazy(() => import("./pages/MT5Service"));
const OneZeroService = lazy(() => import("./pages/OneZeroService"));
const PrimeXMService = lazy(() => import("./pages/PrimeXMService"));

const ContactUs = lazy(() => import("./pages/ContactUs"));
const Careers = lazy(() => import("./pages/Careers"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./components/BlogDetail"));
const Partnership = lazy(() => import("./pages/Partnership"));

const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const AMLAndKYCPolicy = lazy(() => import("./pages/AMLandKYCPolicy"));
const RiskDisclosure = lazy(() => import("./pages/RiskDisclosure"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const RegulatoryInformation = lazy(() => import("./pages/RegulatoryInformation"));
const ProductsDocumentation = lazy(() =>
  import("./pages/ProductsDocumentation")
);


import { isAdminLoggedIn } from "./pages/AdminPanel/services/authService";
import { ToastProvider } from "./pages/AdminPanel/hooks/useToast";


// Example Admin pages
const AdminLogin = lazy(() => import("./pages/AdminPanel/components/AdminLogin"));
const AdminLanding = lazy(() => import("./pages/AdminPanel/components/AdminLanding"));
const AdminPanel = lazy(() => import("./pages/AdminPanel/components/AdminPanel"));
const CareerAdminPanel = lazy(() => import("./pages/AdminPanel/components/CareerAdminPanel"));
const ViewReports = lazy(() => import("./pages/AdminPanel/components/ViewReports"));
const Settings = lazy(() => import("./pages/AdminPanel/components/Settings"));


const ProtectedRoute = ({ children }) => {
  const loggedIn = isAdminLoggedIn();
  if (!loggedIn) return <Navigate to="/admin-login" replace />;
  return children;
};

// Loader
const PageLoader = () => (
  <div style={{ height: "100vh", backgroundColor: "#000" }}></div>
);

const AppContent = () => {
  const location = useLocation();

  // Routes that should NOT show navbar/footer
  const noLayoutRoutes = ["/admin-login",
    "/admin-dashboard",
    "/admin-blogs",
    "/admin-careers",
    "/admin-reports",
    "/admin-settings",];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <div className="pt-24 bg-black min-h-screen">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />

            {/* Turnkey */}
            <Route path="/turnkey/forex-broker" element={<ForexBroker />} />
            <Route
              path="/turnkey/crypto-exchange"
              element={<CryptoExchange />}
            />
            <Route path="/turnkey/crypto-broker" element={<CryptoBroker />} />
            <Route
              path="/turnkey/liquidity-provider"
              element={<LiquidityProvider />}
            />

            {/* Products */}
            <Route path="/products/aynxtrader" element={<B2Trader />} />
            <Route path="/products/aynxcore" element={<B2Core />} />
            <Route path="/products/aynxcopy" element={<B2Copy />} />
            <Route path="/products/aynxconnect" element={<B2Connect />} />
            <Route path="/products/pamm" element={<Pamm />} />
            <Route path="/products/mam" element={<Mam />} />

            {/* Platforms */}
            <Route path="/platforms/aynxmarket" element={<Capmarket />} />
            <Route path="/platforms/vertexfx" element={<VertexFx />} />
            <Route path="/platforms/sirix" element={<Sirix />} />
            <Route path="/platforms/ark-trading" element={<ArkTrading />} />
            <Route path="/platforms/mt5" element={<MT5 />} />
            <Route path="/platforms/ctrader" element={<CTrader />} />
            <Route path="/platforms/ntrader" element={<NTrader />} />

            {/* Services */}
            <Route
              path="/services/ctrader-service"
              element={<CTraderService />}
            />
            <Route
              path="/services/aynxmarket-service"
              element={<CapmarketService />}
            />
            <Route path="/services/mt5-service" element={<MT5Service />} />
            <Route
              path="/services/onezero-service"
              element={<OneZeroService />}
            />
            <Route
              path="/services/primexm-x-core-service"
              element={<PrimeXMService />}
            />

            {/* Company */}
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/about-us" element={<AboutUs />} />
            <Route path="/company/partnership" element={<Partnership />} />

            {/* Blogs */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />

            {/* Contact */}
            <Route path="/contact-us" element={<ContactUs />} />

            {/* Legal */}
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/aml-and-kyc-policy" element={<AMLAndKYCPolicy />} />
            <Route path="/risk-disclosure" element={<RiskDisclosure />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/regulatory-information" element={<RegulatoryInformation />} />

            {/* Docs */}
            <Route
              path="/products/documentation"
              element={<ProductsDocumentation />}
            />

<Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <AdminLanding />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-blogs"
              element={
                <ProtectedRoute>
                  <ToastProvider>
                    <AdminPanel />
                  </ToastProvider>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-careers"
              element={
                <ProtectedRoute>
                  <ToastProvider>
                    <CareerAdminPanel />
                  </ToastProvider>
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-reports"
              element={
                <ProtectedRoute>
                  <ViewReports />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </div>

      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;