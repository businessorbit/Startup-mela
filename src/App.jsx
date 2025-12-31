import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import SponsorsPage from './pages/SponserPage';
import WorkWithUsPage from './pages/Workwithuspage';
import ContactPage from './pages/ContactusPage';
import CheckoutPage from './pages/CheckoutPage'; 
import CursorGlow from './components/CursorGlow/CursorGlow';

function App() {
  return (  
    <Router>
      {/* Global Cursor Component 
        Placed inside Router but outside Routes so it persists across pages.
      */}
      <CursorGlow />

      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Inner Pages */}
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/workwithus" element={<WorkWithUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Checkout Route */}
        <Route path="/checkout" element={<CheckoutPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;