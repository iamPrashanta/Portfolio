import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ServicesList } from "@/components/sections/services-list";
import { Metrics } from "@/components/sections/metrics";
import { AboutPreview } from "@/components/sections/about-preview";
import { LatestInsights } from "@/components/sections/latest-insights";
import { HomeContact } from "@/components/sections/home-contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-header">
        <Hero />
        <Clients />
        <FeaturedProjects />
        <ServicesList />
        <Metrics />
        <AboutPreview />
        <LatestInsights />
        <HomeContact />
      </main>
      <Footer />
    </>
  );
}
