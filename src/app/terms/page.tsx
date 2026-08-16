import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LegalHero } from "@/components/legal/legal-hero";
import { LegalLayout } from "@/components/legal/legal-layout";
import { termsOfService } from "@/data/legal/terms-of-service";

export const metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for engaging prashanta.dev software development and consulting services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-header">
        <LegalHero 
          title="Terms of Service"
          description="Clear boundaries, independent contractor terms, and professional frameworks for software engineering engagements."
          lastUpdated="August 16, 2026"
        />
        <LegalLayout sections={termsOfService} />
      </main>
      <Footer />
    </>
  );
}
