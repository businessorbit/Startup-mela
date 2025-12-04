// FILE: src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage.jsx";
import SponsorsPage from "./pages/SponserPage.jsx";

import CursorGlow from "./components/CursorGlow/CursorGlow";
import WorkwithusPage from "./pages/Workwithuspage.jsx";
import ContactusPage from "./pages/ContactusPage.jsx";
import LegalPage from "./pages/LegalPage.jsx";

function App() {
  return (
    <Router>
      {/* Global cursor stays above all routes */}
      <CursorGlow />

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomePage />} />

        {/* Sponsors Route */}
        <Route path="/sponsors" element={<SponsorsPage />} />

        <Route path="/workwithus" element={<WorkwithusPage/>} />

        <Route path="/contact" element={<ContactusPage/>} />

        <Route path="/terms" element={<LegalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
