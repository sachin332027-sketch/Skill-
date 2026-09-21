import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import CustomCursor from "./components/CustomCursor";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jarvis — Technology & Strategy Consulting",
  description:
    "Jarvis builds technology and strategic intelligence for the people, institutions and leaders shaping India — at the intersection of strategy, technology, data, AI, governance and political intelligence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text-primary no-cursor">
        <CustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
