import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Portfolio Showcase",
  description: "Explore my featured projects including Platform98, AWS Community Day Cameroon, Toolbox, and more. Backend development, full-stack solutions, and collaborative projects.",
  keywords: ["Projects", "Portfolio", "Platform98", "NestJS Projects", "Backend Projects", "Full Stack Development", "API Development"],
  openGraph: {
    title: "Projects - Ben Hamadou Portfolio",
    description: "Explore my featured projects showcasing backend development expertise and full-stack solutions.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}