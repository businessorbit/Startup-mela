// FILE: src/pages/LegalPage.jsx
import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/Footer/FooterSection";

function SectionTitle({ children }) {
  return <h2 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">{children}</h2>;
}

function SmallHeader({ children }) {
  return <h3 className="text-lg font-medium mt-4 mb-2">{children}</h3>;
}

export default function LegalPage() {
  const [tab, setTab] = useState("terms");
  const printRef = useRef();

  const handlePrint = () => {
    // print the legal area
    if (!printRef.current) return;
    const printContents = printRef.current.innerHTML;
    const w = window.open("", "", "height=700,width=900");
    w.document.write("<html><head><title>Legal</title>");
    w.document.write('<style>body{font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; padding:20px; color:#111} h1,h2,h3{color:#000;} p{color:#222;line-height:1.6}</style>');
    w.document.write("</head><body>");
    w.document.write(printContents);
    w.document.write("</body></html>");
    w.document.close();
    w.focus();
    setTimeout(() => w.print(), 300);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
        <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm tracking-wide text-gray-500 uppercase">~~ Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3">Terms & Policies</h1>
        <p className="text-gray-600 mt-4">Read our Terms of Use, Privacy Policy and Refund Policy below.</p>

        {/* Tabs */}
        <div className="mt-8 flex items-center gap-4">
          <button
            onClick={() => setTab("terms")}
            className={`px-4 py-2 rounded-md ${tab === "terms" ? "bg-black text-white" : "bg-gray-100 text-gray-700"}`}
          >
            Terms of Use
          </button>
          <button
            onClick={() => setTab("privacy")}
            className={`px-4 py-2 rounded-md ${tab === "privacy" ? "bg-black text-white" : "bg-gray-100 text-gray-700"}`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setTab("refund")}
            className={`px-4 py-2 rounded-md ${tab === "refund" ? "bg-black text-white" : "bg-gray-100 text-gray-700"}`}
          >
            Refund Policy
          </button>

          <div className="ml-auto flex items-center gap-3">
            <button onClick={handlePrint} className="px-3 py-2 bg-indigo-600 text-white rounded-md">Print</button>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(tab + "-content");
                if (!el) return;
                navigator.clipboard.writeText(el.innerText).then(() => alert("Copied to clipboard"));
              }}
              className="px-3 py-2 bg-gray-100 rounded-md"
            >
              Copy
            </a>
          </div>
        </div>

        <article ref={printRef} className="mt-8 bg-white border border-gray-100 rounded-lg p-8 shadow-sm">
          {tab === "terms" && (
            <div id="terms-content" className="prose max-w-none">
              <h2>Terms of Use</h2>

              <p>
                This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable...
              </p>

              {/* Insert the full Terms content you previously pasted; below is a structured version: */}
              <SectionTitle>Introduction</SectionTitle>
              <p>
                This document is published in accordance with the provisions of Rule 3 (1)...
              </p>

              <SmallHeader>Platform Owner</SmallHeader>
              <p>
                The Platform is owned by NITIN, a company incorporated under the Companies Act, 1956 with its registered office at 3505, Mohali Sector 89-D ,Rupnagar ,India (hereinafter referred to as “Platform Owner”, 'we', 'us', 'our').
              </p>

              <SmallHeader>Acceptance</SmallHeader>
              <p>
                Your use of the Platform and services and tools are governed by the following terms and conditions...
              </p>

              <SmallHeader>Access & Use</SmallHeader>
              <p>To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration...</p>

              <SmallHeader>Warranties & Disclaimers</SmallHeader>
              <p>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website...</p>

              <SmallHeader>Intellectual Property</SmallHeader>
              <p>The contents of the Platform and the Services are proprietary to us and are licensed to us. You will not have any authority to claim any intellectual property rights...</p>

              <SmallHeader>Indemnity</SmallHeader>
              <p>You shall indemnify and hold harmless Platform Owner, its affiliates... from any claim or demand, or actions including reasonable attorney's fees made by any third party arising out of your breach...</p>

              <SmallHeader>Force Majeure</SmallHeader>
              <p>Notwithstanding anything contained in these Terms of Use, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.</p>

              <SmallHeader>Governing Law & Dispute Resolution</SmallHeader>
              <p>These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.</p>
              <p>All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Rupnagar and Punjab.</p>

              <SmallHeader>Contact</SmallHeader>
              <p>All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website.</p>
            </div>
          )}

          {tab === "privacy" && (
            <div id="privacy-content" className="prose max-w-none">
              <h2>Privacy Policy</h2>

              <p>This Privacy Policy describes how NITIN and its affiliates (collectively NITIN, we, our, us) collect, use, share, protect or otherwise process your information/ personal data through our website https://startupmela.com/ (hereinafter referred to as Platform).</p>

              <SectionTitle>Introduction</SectionTitle>
              <p>By visiting this Platform, providing your information or availing any product/service offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to data protection and privacy. If you do not agree please do not use or access our Platform.</p>

              <SmallHeader>Collection</SmallHeader>
              <p>We collect personal data when you use our Platform, services or otherwise interact with us... some of the information includes name, DOB, address, telephone, email and other information you provide. Sensitive personal data may be collected with consent such as payment instrument information or biometric information where applicable.</p>

              <SmallHeader>Usage</SmallHeader>
              <p>We use personal data to provide the services you request. To the extent we use your personal data to market to you, we will provide you the ability to opt-out of such uses...</p>

              <SmallHeader>Sharing</SmallHeader>
              <p>We may share your personal data internally within our group entities, our other corporate entities, and affiliates to provide you access to services and products offered by them. We may disclose personal data to third parties such as sellers, business partners, third party service providers including logistics partners...</p>

              <SmallHeader>Security Precautions</SmallHeader>
              <p>To protect your personal data from unauthorised access or disclosure, loss or misuse we adopt reasonable security practices and procedures. However, transmission of information is not completely secure and inherent risks exist.</p>

              <SmallHeader>Data Deletion and Retention</SmallHeader>
              <p>You have an option to delete your account by visiting your profile and settings on our Platform. We retain your personal data for a period no longer than is required for the purpose for which it was collected or as required under any applicable law. We may retain data in anonymised form for research and analytics.</p>

              <SmallHeader>Your Rights & Consent</SmallHeader>
              <p>You may access, rectify, and update your personal data directly through platform features. By visiting our Platform you consent to the collection, use, storage and disclosure of your information as described.</p>

              <SmallHeader>Changes to this Policy</SmallHeader>
              <p>Please check our Privacy Policy periodically for changes. We may update this Privacy Policy to reflect changes to our information practices.</p>
            </div>
          )}

          {tab === "refund" && (
            <div id="refund-content" className="prose max-w-none">
              <h2>Refund Policy</h2>
              <p>We are not providing any kind of refund.</p>
            </div>
          )}
        </article>
        <FooterSection />
      </div>
    </main>
  );
}
