import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intro to Next.js 13 | HELHa",
  description: "Generated by create next app",
  authors: [{ name: "Nicolas Toffolo" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
