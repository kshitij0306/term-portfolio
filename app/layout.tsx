import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevPortfolio.tsx",
  description: "SDE & Researcher Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrains.className} bg-[#1e1e1e] text-gray-300 antialiased h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}