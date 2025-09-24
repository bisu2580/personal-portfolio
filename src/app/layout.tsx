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
  description: "This is a portfolio website of Biswajit",
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
