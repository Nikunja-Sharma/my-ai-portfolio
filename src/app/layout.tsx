import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Nikunja Sarma",
    default: "Nikunja Sarma",
  },
  description:
    "Explore my portfolio showcasing expertise in cybersecurity, cloud computing, and bespoke web development. Discover how I can elevate your digital security and web presence today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main className="max-w-3xl mx-auto py-10 px-3">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}