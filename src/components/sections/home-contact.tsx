"use client";

import * as React from "react";
import { PrashantaImage } from "@/components/ui/prashanta-image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/brand/logo";
import { siteConfig } from "@/config/site";
import { ObfuscatedEmail } from "@/components/ui/obfuscated-email";

export function HomeContact() {
  return (
    <Section size="lg" id="contact" className="scroll-m-20">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Left Dark Card */}
          <div className="bg-[#1c1c1c] rounded-[24px] p-8 md:p-12 text-white flex flex-col justify-between min-h-[600px] relative overflow-hidden">
            <div className="noise absolute inset-0 opacity-[0.03] pointer-events-none" />
            <div className="relative z-10 animate-fade-up">
              <div className="flex items-center gap-2 text-[0.75rem] tracking-widest uppercase mb-6 text-white/70 font-medium">
                <span className="text-white">+</span> CONTACT
              </div>
              <h2 className="text-display-md mb-4 text-white">
                Let&apos;s Talk
              </h2>
              <p className="text-[1.125rem] text-white/70 max-w-md mb-12">
                Tell me about your project — whether it&apos;s a scalable backend, an intelligent application, or a complete digital product.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
                  </div>
                  <h4 className="font-medium text-[1.125rem] mb-2">Quick response</h4>
                  <p className="text-white/60 text-[0.875rem]">I review every request and reply within 24 hours.</p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                  </div>
                  <h4 className="font-medium text-[1.125rem] mb-2">Clear next steps</h4>
                  <p className="text-white/60 text-[0.875rem]">You&apos;ll receive a tailored plan with timeline, scope, and pricing.</p>
                </div>
              </div>
            </div>

            {/* Profile Card Bottom */}
            <div className="relative z-10 bg-[#252525] border border-white/5 rounded-2xl p-4 flex items-center justify-between mt-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden relative bg-black/50 shrink-0">
                  <PrashantaImage src="/images/me/me2.png" alt="Prashanta Mondal" fill className="object-cover rounded-none" />
                </div>
                <div>
                  <p className="text-white/60 text-[0.75rem] font-medium tracking-wide uppercase mb-1">Engineering Lead</p>
                  <p className="font-medium text-[1rem] leading-none">Prashanta Mondal</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {siteConfig.emails.map((email) => (
                  <ObfuscatedEmail key={email} email={email} className="group-dark [&>button]:text-[0.875rem]" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="bg-accent rounded-[24px] p-4 md:p-8 relative overflow-hidden flex flex-col justify-center min-h-[600px]">
            {/* Abstract background elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-white/20 to-transparent blur-3xl mix-blend-overlay" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-black/30 to-transparent blur-3xl mix-blend-overlay" />
            <div className="noise absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay" />

            {/* Inner White Card */}
            <div className="relative z-10 bg-white rounded-[20px] p-8 md:p-12 shadow-2xl flex flex-col w-full h-full animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center mb-8">
                <Logo variant="horizontal" size="sm" className="text-black" />
              </div>

              <h3 className="text-[2.5rem] md:text-[3rem] font-medium leading-[1.1] tracking-tight text-black mb-8">
                Have a project<br />in mind?
              </h3>

              <form className="flex-1 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-4 outline-none focus:border-neutral-400 focus:bg-white transition-colors text-black placeholder:text-neutral-400" />
                  <input type="email" placeholder="Email" className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-4 outline-none focus:border-neutral-400 focus:bg-white transition-colors text-black placeholder:text-neutral-400" />
                </div>
                <textarea placeholder="Project details" rows={4} className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-4 outline-none focus:border-neutral-400 focus:bg-white transition-colors text-black placeholder:text-neutral-400 resize-none flex-1" />

                <div className="mt-4 flex flex-col gap-4">
                  <button type="submit" className="w-full bg-accent text-white font-medium py-4 rounded-xl hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20">
                    Send Request
                  </button>
                  <p className="text-[0.75rem] text-neutral-500 text-center sm:text-left">
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
