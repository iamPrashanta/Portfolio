import * as React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { services } from "@/data/services";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

// Generate static params for all services
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-[140px] pb-[40px] md:pt-[180px] md:pb-[60px] overflow-hidden bg-black text-white">
          <Container size="large" className="flex flex-col items-start animate-fade-up">
            <div className="w-16 h-16 rounded-2xl border border-white/20 flex items-center justify-center mb-8">
              <Image src={service.icon} alt="" width={32} height={32} className="w-8 h-8 invert opacity-80" />
            </div>
            <SectionHeading
              badge="Service Details"
              heading={service.title}
              subtext={service.description}
              headingAs="h1"
              className="max-w-[800px]"
            />
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-[96px] md:py-[144px]">
          <Container size="large">
            <SectionHeading
              badge="Capabilities"
              heading="What's Included"
              className="mb-16"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, idx) => (
                <div key={idx} className="bg-neutral-50 rounded-[16px] p-8 flex items-start gap-4 border border-neutral-200 animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-[1.125rem] font-medium text-black">{feature}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
