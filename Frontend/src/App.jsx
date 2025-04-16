import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import ImageAnalyzer from "./components/Anaylizer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import AdminSignup from "./components/AdminSignup"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 w-screen">
        <div className="max-w-7xl mx-auto px-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeatureSection />} />
            <Route path="/workflow" element={<Workflow />} />
            <Route path="/analyzer" element={<ImageAnalyzer />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/admin" element={<AdminSignup />} /> 
          </Routes>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
