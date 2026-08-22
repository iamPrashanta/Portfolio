import { notFound } from "next/navigation";
import { Metadata } from "next";
import { skills } from "@/data/skills";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ContactCta } from "@/components/sections/contact-cta";

import { SkillHero } from "@/components/skills/skill-hero";
import { SkillAbout } from "@/components/skills/skill-about";
import { SkillHistory } from "@/components/skills/skill-history";
import { SkillProblemSolved } from "@/components/skills/skill-problem-solved";
import { SkillEcosystem } from "@/components/skills/skill-ecosystem";
import { SkillLearningPath } from "@/components/skills/skill-learning-path";
import { SkillUnderTheHood } from "@/components/skills/skill-under-the-hood";
import { SkillAdvancedConcepts } from "@/components/skills/skill-advanced-concepts";
import { SkillCodingStyle } from "@/components/skills/skill-coding-style";
import { SkillSecurity } from "@/components/skills/skill-security";
import { SkillRelated } from "@/components/skills/skill-related";
import { SkillUnderDevelopment } from "@/components/skills/skill-under-development";
import { SkillCta } from "@/components/skills/skill-cta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return skills.map((skill) => ({
    slug: skill.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const skill = skills.find((s) => s.slug === resolvedParams.slug);

  if (!skill) return { title: "Not Found" };

  if (skill.status === "coming-soon") {
    return {
      title: `${skill.name} — Skills | Prashanta.dev`,
      description: skill.description,
    };
  }

  return {
    title: `${skill.name}: Architecture, Ecosystem & Security | Prashanta.dev`,
    description: skill.content?.overview || skill.description,
    openGraph: {
      url: `/skills/${skill.slug}`,
    },
  };
}

export default async function SkillDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const skill = skills.find((s) => s.slug === resolvedParams.slug);

  if (!skill) {
    notFound();
  }

  if (skill.status === "coming-soon") {
    return (
      <>
        <Navbar />
        <SkillUnderDevelopment skill={skill} />
        {skill.relatedServices && skill.relatedServices.length > 0 && (
          <Container size="default" className="max-w-4xl mx-auto pb-24">
            <SkillCta skill={skill} />
          </Container>
        )}
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-header bg-background">
        <Section size="lg" className="py-12 md:py-24">
          <Container size="default" className="max-w-4xl mx-auto animate-fade-up">
            <SkillHero skill={skill} />
            <SkillAbout skill={skill} />
            <SkillHistory skill={skill} />
            <SkillProblemSolved skill={skill} />
            <SkillEcosystem skill={skill} />
            <SkillLearningPath skill={skill} />
            <SkillUnderTheHood skill={skill} />
            <SkillAdvancedConcepts skill={skill} />
            <SkillCodingStyle skill={skill} />
            <SkillSecurity skill={skill} />
            <SkillRelated skill={skill} />
            <SkillCta skill={skill} />
          </Container>
        </Section>
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
