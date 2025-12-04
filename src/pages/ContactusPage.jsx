import Navbar from "../components/Navbar/Navbar.jsx";
import FooterSection from "../components/Footer/FooterSection.jsx";
import ContactPage from "../components/Contactus/Contactuspage.jsx";

export default function ContactusPage() {
  return (
    <main
      data-theme="light"
      data-tail="black"
      className="min-h-screen w-full bg-white"
    >
      <Navbar />
      <ContactPage />
      <FooterSection />
    </main>
  );
}
