import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SoftwareApplications from "./pages/SoftwareApplications";
import ApplicationDetail from "./pages/ApplicationDetail";
import DigitalMarketing from "./pages/DigitalMarketing";
import PlantMarketplace from "./pages/PlantMarketplace";
import SafetyApp from "./pages/SafetyApp";
import GreenInitiative from "./pages/GreenInitiative";
import BookConsultancy from "./pages/BookConsultancy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EnquiryForm from "./components/EnquiryForm";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 mx-10  ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<SoftwareApplications />} />
          <Route
            path="/software/:categorySlug/:appSlug"
            element={<ApplicationDetail />}
          />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/plant-marketplace" element={<PlantMarketplace />} />
          <Route path="/safety-app" element={<SafetyApp />} />
          <Route path="/green-initiative" element={<GreenInitiative />} />
          <Route path="/book-consultancy" element={<BookConsultancy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <EnquiryForm />
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
