import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ShootingStarCursor from "@/components/ShootingStarCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // normal to bold weights
  variable: "--font-sans",
});

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
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-black text-white">
        <ShootingStarCursor />
        {children}
      </body>
    </html>
  );
}
