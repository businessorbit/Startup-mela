import React from "react";
import SponsorsSection from "../components/Sponsers/Sponsers";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";

export default function SponsorsPage() {
  return (
    <main
      data-theme="light"
      data-tail="black"
      className="min-h-screen w-full bg-white"
    >
        <Navbar />
      <SponsorsSection />

      <FooterSection />
    </main>
  );
}
