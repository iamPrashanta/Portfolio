import * as React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Prashanta Mondal for software engineering and consulting opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section size="lg" className="overflow-hidden mt-[80px]">
          <Container size="large" className="animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16 md:gap-24">
              
              <div className="flex flex-col">
                <SectionHeading
                  badge="Contact"
                  heading="Let's build something exceptional."
                  subtext="Have a project in mind, need technical consulting, or just want to say hi? I'd love to hear from you."
                  headingAs="h1"
                  className="mb-12"
                />
                
                <form className="flex flex-col gap-6" action="https://formspree.io/f/placeholder" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[0.875rem] font-medium text-black">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        className="bg-neutral-50 border border-neutral-200 focus:border-black rounded-lg px-4 py-3 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[0.875rem] font-medium text-black">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="bg-neutral-50 border border-neutral-200 focus:border-black rounded-lg px-4 py-3 outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-[0.875rem] font-medium text-black">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      required
                      className="bg-neutral-50 border border-neutral-200 focus:border-black rounded-lg px-4 py-3 outline-none transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[0.875rem] font-medium text-black">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6}
                      required
                      className="bg-neutral-50 border border-neutral-200 focus:border-black rounded-lg px-4 py-3 outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <div className="mt-4">
                    <Button type="submit" variant="primary" size="large" className="w-full sm:w-auto">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>

              {/* Contact Info Sidebar */}
              <div className="flex flex-col gap-12 pt-4">
                <div className="flex flex-col gap-4">
                  <h4 className="font-badge uppercase tracking-wider text-[12px] text-muted">
                    Direct Contact
                  </h4>
                  <a href={`mailto:${siteConfig.email}`} className="text-[1.25rem] font-medium hover:text-accent transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="font-badge uppercase tracking-wider text-[12px] text-muted">
                    Location
                  </h4>
                  <p className="text-[1.125rem] text-foreground">
                    {siteConfig.location}
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <h4 className="font-badge uppercase tracking-wider text-[12px] text-muted">
                    Social Profiles
                  </h4>
                  <div className="flex flex-col gap-3">
                    <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                      <Image src="/icons/github.svg" alt="" width={20} height={20} className="opacity-60" />
                      GitHub
                    </a>
                    <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                      <Image src="/icons/linkedin.svg" alt="" width={20} height={20} className="opacity-60" />
                      LinkedIn
                    </a>
                    <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                      <Image src="/icons/whatsapp.svg" alt="" width={20} height={20} className="opacity-60" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
