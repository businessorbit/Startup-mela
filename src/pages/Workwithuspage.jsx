import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";
import VolunteerForm from "../components/Workwithus/Workwithus.jsx";
import SEO from "../components/SEO/SEO";
import { pageSEO, buildBreadcrumbSchema } from "../data/seo";

export default function WorkwithusPage() {
  const seo = pageSEO.workWithUs;

  return (
    <main
      data-theme="light"
      data-tail="black"
      className="min-h-dvh w-full bg-white px-4 sm:px-6 pt-24 pb-12"
    >
      <SEO
        title={seo.title}
        description={seo.description}
        path={seo.path}
        keywords={seo.keywords}
        jsonLd={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work with Us", path: "/workwithus" },
        ])}
      />
      <Navbar />
      <VolunteerForm />
      <FooterSection />
    </main>
  );
}
