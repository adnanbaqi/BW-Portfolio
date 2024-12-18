export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Corp",
    position: "Senior Developer",
    duration: "2020 - Present",
    description: [
      "Led a team of 5 developers in building a cloud-based SaaS platform",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  // Add more experiences
];