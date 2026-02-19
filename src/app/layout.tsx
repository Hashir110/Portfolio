import type React from "react";
import type { Metadata } from "next";
import { Work_Sans, Open_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Home | Muhammad <Hashir /> - Full Stack Developer",
  description:
    "Professional portfolio of <Hashir />, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
        <link rel="icon" href="/ChatGPT Image Aug 26, 2025, 12_52_42 PM.png"/>
      </head>
      <body className="font-sans">{children}</body>
      
    </html>
  );
}
