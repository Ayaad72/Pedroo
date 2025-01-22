import type { Metadata } from "next";
import { ReactLenis } from "lenis/react";

import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PedroCoin - Building the Future of Memes & Tokens",
  description: "Where humor and innovation unite on the Solana blockchain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
