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
    default: "ABDEL-KALIF Ben Hamadou (INGENIO) - Backend Engineer in Douala, Cameroon",
    template: "%s | ABDEL-KALIF Ben Hamadou (INGENIO)"
  },
  description: "ABDEL-KALIF Ben Hamadou (INGENIO) - Backend Engineer in Douala, Cameroon with 3+ years experience in Node.js, NestJS, Spring Boot, AWS, and DevOps. Specializing in scalable APIs, microservices, and cloud infrastructure. Available for remote opportunities.",
  keywords: ["ABDEL-KALIF", "ABDEL-KALIF BEN", "ABDEL-KALIF Ben Hamadou", "INGENIO", "BEN ABDEL-KALIF", "Ben Hamadou", "Backend Engineer in Douala", "Backend Engineer in Cameroon", "Backend Developer Cameroon", "Node.js Developer Douala", "NestJS Developer Cameroon", "Spring Boot Developer", "AWS Developer Cameroon", "DevOps Engineer Douala", "API Development", "Microservices", "Cloud Architecture", "Remote Developer", "Cameroon Developer", "Douala Developer"],
  authors: [{ name: "ABDEL-KALIF Ben Hamadou (INGENIO)", url: "https://github.com/INGENIO-237" }],
  creator: "ABDEL-KALIF Ben Hamadou (INGENIO)",
  publisher: "ABDEL-KALIF Ben Hamadou (INGENIO)",
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
    title: 'ABDEL-KALIF BEN HAMADOU (INGENIO) - Backend Engineer in Douala, Cameroon',
    description: 'ABDEL-KALIF BEN HAMADOU (INGENIO) - Backend Engineer in Douala, Cameroon with 3+ years experience in Node.js, NestJS, Spring Boot, AWS, and DevOps. Specializing in scalable APIs, microservices, and cloud infrastructure.',
    siteName: 'ABDEL-KALIF BEN HAMADOU Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABDEL-KALIF BEN HAMADOU (INGENIO) - Backend Engineer in Douala, Cameroon',
    description: 'Backend Engineer in Douala, Cameroon with 3+ years experience in Node.js, NestJS, Spring Boot, AWS, and DevOps.',
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "ABDEL-KALIF BEN HAMADOU",
    "alternateName": ["INGENIO", "BEN ABDEL-KALIF", "BEN HAMADOU", "ABDEL-KALIF BEN"],
    "jobTitle": "Backend Engineer",
    "description": "Backend Engineer in Douala, Cameroon with 3+ years experience in Node.js, NestJS, Spring Boot, AWS, and DevOps",
    "url": "https://ingenio-portfolio.vercel.app",
    "sameAs": [
      "https://github.com/INGENIO-237",
      "https://twitter.com/INGENIO237"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Douala",
      "addressCountry": "Cameroon"
    },
    "knowsAbout": [
      "Backend Development",
      "Node.js",
      "NestJS",
      "Spring Boot",
      "Java",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "DevOps",
      "Docker",
      "Kubernetes",
      "API Development",
      "Microservices"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
