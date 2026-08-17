import * as React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PrashantaImage } from "@/components/ui/prashanta-image";

export const metadata = {
  title: "Protected Page | Clients",
  description: "Enter your password to access the client portal.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center min-h-screen pt-header pb-[80px]">
        <Section size="none" className="w-full flex items-center justify-center">
          <Container size="small" className="flex justify-center">
            <div className="w-full max-w-[480px] bg-white border border-neutral-200 rounded-[24px] p-8 md:p-12 shadow-sm text-center animate-fade-up">
              
              <div className="flex justify-center mb-8">
                <Badge className="inline-flex items-center gap-2 px-4 py-2">
                  <PrashantaImage src="/icons/Plus 4.svg" alt="Lock" width={16} height={16} className="w-4 h-4" fallbackLabel="" />
                  <span>protected page</span>
                </Badge>
              </div>
              
              <h1 className="text-[2.5rem] font-medium tracking-tight mb-4 text-black">
                Protected Page
              </h1>
              
              <p className="text-neutral-500 mb-8 text-[1rem]">
                Enter your password to access this page
              </p>
              
              <form className="flex flex-col gap-4">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-neutral-100 border-none rounded-[12px] px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-black transition-all"
                  autoFocus
                />
                
                <Button type="submit" variant="dark" className="w-full rounded-[12px] py-4">
                  Submit
                </Button>
                
                <div id="password-error" className="hidden mt-4 text-red-500 text-sm font-medium p-4 bg-red-50 rounded-[12px]">
                  Incorrect password. Please try again.
                </div>
              </form>
              
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
