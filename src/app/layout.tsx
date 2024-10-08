import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import Wrapper from "@/components/AppWrapper";
import Footer from "@/components/Footer";
import AppThemeProvider from "@/components/AppThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "600"],
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
      <body className={cn(poppins.className, "antialiased min-h-screen bg-background text-foreground")}>
        <AppThemeProvider>
          <Header />
          <Wrapper>
            {children}
            <Footer />
          </Wrapper>
        </AppThemeProvider>
      </body>
    </html>
  );
}
