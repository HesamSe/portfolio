export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Word Lens",
    year: 2025,
    description: "Learn the words of your book!",
    url: "https://word-lens.vercel.app",
  },
];
