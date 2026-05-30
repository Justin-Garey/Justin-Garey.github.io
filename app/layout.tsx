import type { Metadata } from "next";
import "./globals.css";
import AnalyticsConsentGate from "./_components/AnalyticsConsentGate";

const gaID = process.env.NEXT_PUBLIC_GA_ID;

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
      <AnalyticsConsentGate gaId={gaID} />
      <body>
        {children}
      </body>
    </html>
  );
}
