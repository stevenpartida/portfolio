export type SocialLink = {
  platform: string;
  url: string;
};

export type Experience = {
  company: string;
  logoUrl: {
    light: string;
    dark: string;
  };
  role: string;
  tags: string[];
  start: string;
  end: string | null;
  description?: string;
};

export type Project = {
  image: string;
  title: string;
  description?: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};
