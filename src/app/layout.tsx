import type React from "react";
import type { Metadata } from "next";
import { Work_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/context/site-context";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://mhhashir.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Hashir - Software Engineer",
    template: "%s | Muhammad Hashir - Software Engineer",
  },
  description:
    "Professional portfolio of Muhammad Hashir, a Software Engineer and Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, NestJS, and modern web applications.",
  applicationName: "Muhammad Hashir Portfolio",
  authors: [{ name: "Muhammad Hashir", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "Muhammad Hashir",
    "Software Engineer",
    "Full Stack Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Node.js Developer",
    "NestJS",
    "PostgreSQL",
    "React Native",
    "Web Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Portfolio",
  ],
  creator: "Muhammad Hashir",
  publisher: "Muhammad Hashir",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Hashir - Software Engineer",
    description:
      "Professional portfolio of Muhammad Hashir, a Software Engineer and Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, NestJS, and modern web applications.",
    url: siteUrl,
    siteName: "Muhammad Hashir - Software Engineer",
    images: [
      {
        url: "/me2jpg.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Hashir - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hashir - Software Engineer",
    description:
      "Professional portfolio of Muhammad Hashir, a Software Engineer and Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, NestJS, and modern web applications.",
    creator: "@Hashir110",
    images: ["/me2jpg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Hashir",
  jobTitle: "Software Engineer",
  url: siteUrl,
  image: `${siteUrl}/me2jpg.jpg`,
  sameAs: [
    "https://github.com/Hashir110",
    "https://www.linkedin.com/in/muhammad-hashir-shaikh-b94854340/",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Software Engineer",
  },
  knowsAbout: [
    "Software Engineering",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "React Native",
    "Tailwind CSS",
    "Web Application Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${openSans.variable} antialiased`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <SiteProvider>
          <div className="min-h-screen bg-[#0b0f12] text-[#f3f4f6] transition-colors duration-300 relative selection:bg-amber-500/20 selection:text-amber-400">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </SiteProvider>
      </body>

    </html>
  );
}
