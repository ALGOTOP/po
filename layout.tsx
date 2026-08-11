import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
