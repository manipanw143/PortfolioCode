export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
  categories: string[];
  tags: string[];
  details: {
    overview: string;
    features: string[];
    challenges: string;
    solution: string;
  };
  links: {
    demo?: string;
    github?: string;
  };
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface TechBadge {
  name: string;
}

export interface ContactInfo {
  email: string;
  location: string;
  availability: string;
}

export interface Social {
  name: string;
  icon: string;
  url: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
