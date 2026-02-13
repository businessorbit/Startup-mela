import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SponsorsPage from "./pages/SponserPage";
import WorkWithUsPage from "./pages/Workwithuspage";
import ContactPage from "./pages/ContactusPage";
import CheckoutPage from "./pages/CheckoutPage";
import ExhibitionStallsPage from "./pages/ExhibitionStallsPage";
import CursorGlow from "./components/CursorGlow/CursorGlow";

// Admin imports
import { AdminAuthProvider } from "./contexts/AdminAuthContext";
import AdminRoute from "./components/AdminRoute";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import OrdersPage from "./pages/admin/OrdersPage";
import VerifyTicketPage from "./pages/admin/VerifyTicketPage";
import VolunteersPage from "./pages/admin/VolunteersPage";
import InquiriesPage from "./pages/admin/InquiriesPage";
import LegalPage from "./pages/LegalPage";
import SpotlightPage from "./pages/SpotlightPage";

function App() {
  return (
    <AdminAuthProvider>
      <Router>
        {/* Global Cursor Component 
          Placed inside Router but outside Routes so it persists across pages.
        */}
        <CursorGlow />

        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />

          <Route path="/terms" element={<LegalPage />} />

          {/* Inner Pages */}
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/workwithus" element={<WorkWithUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/spotlight" element={<SpotlightPage />} />
          <Route path="/exhibition-stalls" element={<ExhibitionStallsPage />} />

          {/* Checkout Route */}
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminRoute><DashboardPage /></AdminRoute>} />
          <Route path="/admin/orders" element={<AdminRoute><OrdersPage /></AdminRoute>} />
          <Route path="/admin/verify" element={<AdminRoute><VerifyTicketPage /></AdminRoute>} />
          <Route path="/admin/volunteers" element={<AdminRoute><VolunteersPage /></AdminRoute>} />
          <Route path="/admin/inquiries" element={<AdminRoute><InquiriesPage /></AdminRoute>} />
        </Routes>
      </Router>
    </AdminAuthProvider>
  );
}

export default App;
