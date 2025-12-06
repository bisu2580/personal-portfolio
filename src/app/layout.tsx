import type { Metadata } from "next";
import { Providers } from "./providers";
import { Montserrat, Varela_Round } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ReactNode } from "react";
import NavMenu from "@/components/NavMenu";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Website - Biswajit Sahoo",
  description:
    "Full-stack and MERN developer skilled in React, Next.js, Node.js, MongoDB, Web Apps, and Cloud deployment. Explore projects, resume, skills & contact.",
  keywords: [
    "Biswajit Sahoo",
    "Fullstack Developer",
    "Web Developer",
    "MERN Stack",
    "React Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "JavaScript",
    "MongoDB",
    "Express",
    "Firebase",
  ],
  authors: [{ name: "Biswajit Sahoo" }],
  creator: "Biswajit Sahoo",
  publisher: "Biswajit Sahoo",
  openGraph: {
    title: "Biswajit Sahoo | Full-Stack Developer Portfolio",
    description:
      "Full-stack MERN developer building scalable applications with modern UI and optimized backend.",
    url: "https://biswajit-sahoo-portfolio.vercel.app",
    siteName: "Biswajit Sahoo Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://biswajit-sahoo-portfolio.vercel.app/banner-hd.png",
        width: 1584,
        height: 396,
      },
    ],
  },
  metadataBase: new URL("https://biswajit-sahoo-portfolio.vercel.app"),
  alternates: {
    canonical: "https://biswajit-sahoo-portfolio.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen overflow-x-hidden relative antialiased ${GeistSans.variable} ${montserrat.variable} ${varela.className}`}
      >
        <Providers>
          <NavMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
