import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import ShootingStarCursor from "@/components/ShootingStarCursor";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Space themed portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} bg-black text-white`}>
        <ShootingStarCursor />
        {children}
      </body>
    </html>
  );
}
