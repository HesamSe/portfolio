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
    url: "https://github.com/HesamSe/word-lens",
  },
  {
    title: "eslint-plugin-recommended",
    year: 2025,
    description: "My custom eslint rules",
    url: "https://github.com/HesamSe/eslint-plugin-recommended",
  },
  {
    title: "Top 150 interviews",
    year: 2025,
    description: "Leetcode.com top interview questions",
    url: "https://github.com/HesamSe/top-150-interview",
  },
];
