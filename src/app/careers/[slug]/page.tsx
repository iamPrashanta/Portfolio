import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { careers } from "@/data/careers";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return careers.map((career) => ({
    slug: career.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const career = careers.find((c) => c.slug === slug);
  
  if (!career) {
    return { title: "Career Not Found" };
  }

  return {
    title: `${career.title} — Careers`,
    description: career.summary,
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const career = careers.find((c) => c.slug === slug);

  if (!career) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-header bg-white dark:bg-black min-h-screen">
        <Section size="lg" className="pt-8">
          <Container size="default">
            {/* Back Navigation */}
            <div className="mb-12 animate-fade-up">
              <Link 
                href="/careers" 
                className="inline-flex items-center text-sm font-medium text-muted hover:text-black dark:hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                BACK TO CAREERS
              </Link>
            </div>

            {/* Header Content */}
            <div className="max-w-4xl mb-16 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-badge uppercase tracking-wider text-[12px] text-muted mb-6">
                + CAREERS
              </h4>
              <h1 className="text-[3rem] md:text-[4.5rem] font-medium leading-tight mb-8 text-black dark:text-white">
                {career.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl">
                {career.summary}
              </p>
            </div>

            {/* Role Meta Data */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-b border-black/10 dark:border-white/10 mb-16 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <h5 className="text-sm font-medium text-muted uppercase tracking-wider mb-2">Department</h5>
                <p className="text-lg font-medium text-black dark:text-white">{career.department}</p>
              </div>
              <div>
                <h5 className="text-sm font-medium text-muted uppercase tracking-wider mb-2">Engagement</h5>
                <p className="text-lg font-medium text-black dark:text-white">{career.engagement}</p>
              </div>
              <div>
                <h5 className="text-sm font-medium text-muted uppercase tracking-wider mb-2">Location</h5>
                <p className="text-lg font-medium text-black dark:text-white">{career.location}</p>
              </div>
            </div>

            {/* Content Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="lg:col-span-8">
                <h2 className="text-3xl font-medium mb-8 text-black dark:text-white">About the role</h2>
                
                <h3 className="text-xl font-medium mb-4 text-black dark:text-white">Responsibilities</h3>
                <ul className="space-y-4 mb-12">
                  {career.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 mr-4 flex-shrink-0" />
                      <span className="text-lg text-muted leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-medium mb-4 text-black dark:text-white">Requirements</h3>
                <ul className="space-y-4 mb-12">
                  {career.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 mr-4 flex-shrink-0" />
                      <span className="text-lg text-muted leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>

                {career.niceToHave && career.niceToHave.length > 0 && (
                  <>
                    <h3 className="text-xl font-medium mb-4 text-black dark:text-white">Nice to have</h3>
                    <ul className="space-y-4 mb-12">
                      {career.niceToHave.map((nice, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-white/30 mt-2.5 mr-4 flex-shrink-0" />
                          <span className="text-lg text-muted leading-relaxed">{nice}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="lg:col-span-4">
                {career.technologies && career.technologies.length > 0 && (
                  <div className="bg-neutral-50 dark:bg-white/5 rounded-2xl p-8 sticky top-32">
                    <h3 className="text-xl font-medium mb-6 text-black dark:text-white">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {career.technologies.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white dark:bg-white/10 text-black dark:text-white rounded-full text-sm font-medium border border-black/5 dark:border-transparent">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-12 lg:p-16 rounded-[32px] bg-neutral-100 dark:bg-white/5 border border-transparent dark:border-white/10 text-center animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-black dark:text-white">Interested in collaborating?</h2>
              <p className="text-muted mb-8 max-w-lg mx-auto">
                If this role aligns with your expertise and you&apos;d like to work together on future projects, get in touch.
              </p>
              <Link href="/contact" className="inline-block px-8 py-3.5 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25 hover:shadow-xl hover:-translate-y-0.5 transform">
                Contact Me
              </Link>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
