'use client'

import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} antialiased`}
      >
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}
