"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="pt-[6rem] pb-[2rem] px-[16px] mt-auto">
      <Container size="xlarge">
        {/* Footer Top - Newsletter & Main Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 mb-16">
          {/* Brand & Newsletter */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-2xl font-medium tracking-tight">
              prashanta<span className="text-accent">.dev</span>
            </Link>
            <p className="text-muted text-[1rem] max-w-sm">
              Building robust digital systems, backend architectures, and intelligent software products.
            </p>
            
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white border border-neutral-300 focus:border-neutral-500 rounded-lg px-4 py-3 outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-[50px] font-medium hover:bg-black/80 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted mt-2">
                Engineering insights delivered occasionally. No spam.
              </p>
            </form>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.values(footerNavigation).map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <h4 className="font-badge uppercase tracking-wider text-[12px] text-black">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-muted hover:text-accent transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-200 opacity-0 group-hover:opacity-100">
                          -
                        </span>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Divider className="mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <Link href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} className="rounded-none" />
            </Link>
            <Link href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} className="rounded-none" />
            </Link>
            <Link href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="rounded-none" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
