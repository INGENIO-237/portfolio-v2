import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Get In Touch",
  description: "Connect with Ben Hamadou (INGENIO) - Backend Developer. Available for remote opportunities, collaborations, and tech discussions. Email, LinkedIn, GitHub contacts.",
  keywords: ["Contact", "Backend Developer Contact", "Remote Developer", "Collaboration", "Tech Consultation", "Hire Developer"],
  openGraph: {
    title: "Contact Ben Hamadou - Backend Developer",
    description: "Get in touch for remote opportunities, collaborations, and tech discussions.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}