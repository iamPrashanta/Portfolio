"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/config/site";
import { ObfuscatedEmail } from "@/components/ui/obfuscated-email";

export function HomeContact() {
  return (
    <Section size="lg" id="contact" className="scroll-m-20">
      <Container size="default">
        <div className="bg-[#1c1c1c] rounded-[32px] md:rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-20 text-white shadow-2xl border border-white/5">
          {/* Abstract background elements for the whole card */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-[120px] mix-blend-overlay pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-accent/20 to-transparent blur-[120px] mix-blend-overlay pointer-events-none" />
          <div className="noise absolute inset-0 opacity-[0.03] pointer-events-none" />
          
          {/* Left Column: Info */}
          <div className="flex-1 relative z-10 flex flex-col justify-center animate-fade-up">
            <div className="flex items-center gap-2 text-[0.75rem] tracking-widest uppercase mb-6 text-white/70 font-medium">
              <span className="text-accent">+</span> CONTACT
            </div>
            
            <h2 className="text-display-md mb-6 text-white leading-tight">
              Let&apos;s build something <br/>
              <span className="text-white/40">extraordinary.</span>
            </h2>
            
            <p className="text-[1.125rem] text-white/70 max-w-md mb-12">
              Tell me about your project — whether it&apos;s a scalable backend, an intelligent application, or a complete digital product.
            </p>

            <div className="flex flex-col gap-8 mb-12">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
                </div>
                <div className="mt-1">
                  <h4 className="font-medium text-[1.125rem] mb-1">Quick response</h4>
                  <p className="text-white/60 text-[0.875rem]">I review every request and reply within 24 hours.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </div>
                <div className="mt-1">
                  <h4 className="font-medium text-[1.125rem] mb-1">Clear next steps</h4>
                  <p className="text-white/60 text-[0.875rem]">You&apos;ll receive a tailored plan with timeline, scope, and pricing.</p>
                </div>
              </div>
            </div>

            {/* Emails */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <p className="text-white/50 text-[0.875rem]">Or email directly:</p>
              <div className="flex flex-col gap-2">
                {siteConfig.emails.map((email) => (
                  <ObfuscatedEmail key={email} email={email} className="group-dark [&>button]:text-[0.875rem] [&>button]:font-medium" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 relative z-10 w-full max-w-xl mx-auto lg:mx-0 lg:max-w-none flex items-center">
            <div className="w-full bg-white/5 border border-white/10 rounded-[24px] p-6 sm:p-10 backdrop-blur-md relative overflow-hidden animate-fade-up" style={{ animationDelay: "0.2s" }}>
              
              <div className="flex items-center justify-between mb-8">
                <Logo variant="horizontal" size="sm" className="text-white" />
              </div>

              <h3 className="text-[2rem] font-medium leading-[1.1] tracking-tight text-white mb-8">
                Project Details
              </h3>

              <form className="flex-1 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent focus:bg-black/60 transition-colors text-white placeholder:text-white/40" 
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent focus:bg-black/60 transition-colors text-white placeholder:text-white/40" 
                  />
                </div>
                <textarea 
                  placeholder="Tell me about your requirements..." 
                  rows={5} 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-accent focus:bg-black/60 transition-colors text-white placeholder:text-white/40 resize-none flex-1" 
                />

                <div className="mt-4 flex flex-col gap-4">
                  <button type="submit" className="w-full bg-accent text-white font-medium py-4 rounded-xl hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/40">
                    Send Request
                  </button>
                  <p className="text-[0.75rem] text-white/40 text-center">
                    By submitting this form, you agree to our Terms & Privacy Policy
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
