import { Experience, Project, SocialLink } from "./types";

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/stevenpartida",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/steven-partida",
  },
  { platform: "Email", url: "mailto:spartida0002@gmail.com" },
];

export const experiences: Experience[] = [
  {
    company: "Francisco's Roofing Inc",
    logoUrl: {
      light: "/fri-logo-dark.png",
      dark: "/fri-logo-light.png",
    },
    role: "Freelance Web Developer",
    tags: ["React", "TypeScript", "Supabase"],
    start: "2022",
    end: "2025",
    description:
      "Rebuilt a roofing company's static site into a full-stack Next.js/Supabase app with a secure admin portal, React Hook Form contact system, and dynamic routing — growing organic traffic to 468+ monthly visitors.",
  },
];

export const projects: Project[] = [
  {
    image: "",
    title: "Francisco's Roofing Web App",
    description:
      "Rebuilt a roofing company's static site into a full-stack Next.js/Supabase app with a secure admin portal, React Hook Form contact system, and dynamic routing — growing organic traffic to 468+ monthly visitors.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/stevenpartida/franciscosroofinginc-website",
    liveUrl: "https://franciscosroofinginc.co/",
  },
];
