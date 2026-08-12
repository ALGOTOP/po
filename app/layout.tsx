import type { Metadata } from "next";
import "./globals.css";
import { neueMontreal } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Hero Reveal Effect",
  description: "Hero image load-in reveal effect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={neueMontreal.variable}>{children}</body>
    </html>
  );
}
