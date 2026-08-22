import ProjectsPage, { metadata as projectsMetadata } from "@/app/projects/page";

export const metadata = {
  ...projectsMetadata,
  alternates: {
    canonical: "/projects",
  },
};

export default ProjectsPage;
