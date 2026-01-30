import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Import fonts
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers/Providers";

// Configure fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "NibbleLearn - The AI Platform for Schools",
  description: "Safe, district-aligned AI for schools that provides support, sparks creativity, and improves student learning outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable, // Apply font variables
          outfit.variable
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
