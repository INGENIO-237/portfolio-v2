import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Tech Insights & Tutorials",
  description: "Read technical articles about backend development, NestJS, microservices, API design, database optimization, and DevOps practices by Ben Hamadou (INGENIO).",
  keywords: ["Tech Blog", "Backend Development", "NestJS Tutorials", "API Development", "Microservices", "Database Optimization", "DevOps", "Programming Articles"],
  openGraph: {
    title: "Tech Blog - Ben Hamadou (INGENIO)",
    description: "Technical insights about backend development, architecture patterns, and modern software engineering practices.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}