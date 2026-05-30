import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Garey Website",
  description:
    "I am a software engineer working professionally in web development, API development, AWS cloud, software defined networking, and open-source 5G R&D.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
