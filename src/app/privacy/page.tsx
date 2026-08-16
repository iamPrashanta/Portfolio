import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LegalHero } from "@/components/legal/legal-hero";
import { LegalLayout } from "@/components/legal/legal-layout";
import { privacyPolicy } from "@/data/legal/privacy-policy";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data handling practices for prashanta.dev software engineering and consulting services.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-header">
        <LegalHero 
          title="Privacy Policy"
          description="Transparency, data protection, and clear boundaries for professional engineering engagements."
          lastUpdated="August 16, 2026"
        />
        <LegalLayout sections={privacyPolicy} />
      </main>
      <Footer />
    </>
  );
}
