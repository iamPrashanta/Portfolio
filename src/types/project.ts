export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  logo?: string;
  client?: string;
  year?: string;
  services?: string[];
  techStack?: string[];
  link?: string;
  featured?: boolean;
}
