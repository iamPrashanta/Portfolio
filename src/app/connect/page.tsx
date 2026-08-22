import ContactPage, { metadata as contactMetadata } from "@/app/contact/page";

export const metadata = {
  ...contactMetadata,
  alternates: {
    canonical: "/contact",
  },
};

export default ContactPage;
