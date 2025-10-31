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
  title: {
    default: "Ben Hamadou (INGENIO) - Backend Developer & DevOps Engineer",
    template: "%s | Ben Hamadou (INGENIO)"
  },
  description: "Backend Developer with 3+ years experience in Node.js, NestJS, AWS, and DevOps. Specializing in scalable APIs, microservices, and cloud infrastructure. Available for remote opportunities.",
  keywords: ["Backend Developer", "Node.js", "NestJS", "TypeScript", "AWS", "DevOps", "API Development", "Microservices", "Cloud Architecture", "Remote Developer", "Cameroon Developer"],
  authors: [{ name: "Ben Hamadou Abdel-Kalif", url: "https://github.com/INGENIO-237" }],
  creator: "Ben Hamadou (INGENIO)",
  publisher: "Ben Hamadou (INGENIO)",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ingenio-portfolio.vercel.app',
    title: 'Ben Hamadou (INGENIO) - Backend Developer & DevOps Engineer',
    description: 'Backend Developer with 3+ years experience in Node.js, NestJS, AWS, and DevOps. Specializing in scalable APIs, microservices, and cloud infrastructure.',
    siteName: 'Ben Hamadou Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ben Hamadou (INGENIO) - Backend Developer & DevOps Engineer',
    description: 'Backend Developer with 3+ years experience in Node.js, NestJS, AWS, and DevOps.',
    creator: '@INGENIO237',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://ingenio-portfolio.vercel.app',
  },
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
