import Navbar from "../components/Navbar/Navbar.jsx";
import FooterSection from "../components/Footer/FooterSection.jsx";
import ContactPage from "../components/Contactus/Contactuspage.jsx";
import SEO from "../components/SEO/SEO";
import { pageSEO, buildBreadcrumbSchema } from "../data/seo";

export default function ContactusPage() {
  const seo = pageSEO.contact;

  return (
    <main
      data-theme="light"
      data-tail="black"
      className="min-h-screen w-full bg-white"
    >
      <SEO
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
        jsonLd={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Navbar />
      <ContactPage />
      <FooterSection />
    </main>
  );
}
