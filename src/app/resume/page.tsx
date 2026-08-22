import AboutPage, { metadata as aboutMetadata } from "@/app/about/page";

export const metadata = {
  ...aboutMetadata,
  alternates: {
    canonical: "/about",
  },
};

export default AboutPage;
