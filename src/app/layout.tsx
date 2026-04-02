import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cristi AutoTest | Auto Electrical & Towing in Târgu Neamț",
  description: "Professional auto electrical services, general auto service, and 24/7 towing in Târgu Neamț, Romania.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-slate-900 text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
