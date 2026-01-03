import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { WaitlistProvider } from "@/components/WaitlistContext";
import ClientEntry from "@/components/ClientEntry";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Bika - All-in-One Business Management System",
  description: "Manage your business, track inventory, sales, expenses, finance, and documents with Bika.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <div className="backgroundContainer">
          <div className="backgroundDots"></div>
        </div>
        <ClientEntry>
          <WaitlistProvider>
            {children}
          </WaitlistProvider>
        </ClientEntry>
      </body>
    </html>
  );
}
