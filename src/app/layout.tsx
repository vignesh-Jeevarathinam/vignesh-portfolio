import type { Metadata } from "next";
import { Analytics }
from "@vercel/analytics/react";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";

export const metadata = {
  metadataBase: new URL(
    "https://vigneshjeevarathinam.dev"
  ),

  title:
    "Vignesh J | Senior Full Stack Developer",

  description:
    "Senior Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, AWS and scalable enterprise applications.",

  keywords: [
    "React Developer",
    "Node.js Developer",
    "Next.js",
    "TypeScript",
    "Full Stack Developer",
    "Chennai",
    "MERN Stack"
  ],

  openGraph: {
    title:
      "Vignesh J Portfolio",

    description:
      "Senior Full Stack Developer",

    url:
      "https://vigneshjeevarathinam.dev",

    siteName:
      "Vignesh J Portfolio",

    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}