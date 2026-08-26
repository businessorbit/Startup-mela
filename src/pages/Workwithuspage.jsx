import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";
import VolunteerForm from "../components/Workwithus/Workwithus.jsx";

export default function WorkwithusPage() {
  return (
    <main
      data-theme="light"
      data-tail="black"
      className="min-h-dvh w-full bg-white px-4 sm:px-6 pt-24 pb-12"
    >
      <Navbar />
      <VolunteerForm />
      <FooterSection />
    </main>
  );
}
