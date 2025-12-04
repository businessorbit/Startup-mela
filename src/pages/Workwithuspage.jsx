// FILE: src/pages/SponsorsPage.jsx

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";
import VolunteerForm from "../components/Workwithus/Workwithus.jsx";
import AnimatedBg from "../components/AnimatedBg/AnimatedBg.jsx";

export default function WorkwithusPage() {
  return (
    <main
      data-theme="light"
      data-tail="black"
      className="min-h-screen w-full bg-white"
    >
      <Navbar />
      <VolunteerForm />
      <FooterSection />
    </main>
  );
}
