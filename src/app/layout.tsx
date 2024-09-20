import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import Wrapper from "@/components/AppWrapper";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "BEN HAMADOU A.(INGENIO) - Portfolio",
  description:
    "Hey, I'm Ben Hamadou (INGENIO). I am a full-stack software engineer with over 3 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(nunito.className, "antialiased min-h-screen")}>
        <Header />
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
