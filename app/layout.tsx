import type { Metadata } from "next";
import "./globals.css";
import GridBackground from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "Digioutreach | Strategic Digital Marketing Advisor",
  description: "Stop wasting budget on digital marketing. Digioutreach provides strategic clarity to founders on what to stop and what to multiply. No tools, just decisions.",
  keywords: ["Digital Marketing Strategy", "Marketing Audit", "Founder Clarity", "Digioutreach", "Kapil Chandak", "Business Growth"],
  openGraph: {
    title: "Digioutreach | Strategic Digital Marketing Advisor",
    description: "Your digital marketing doesn’t need more effort and money. It needs clarity on what to stop.",
    type: "website",
    locale: "en_US",
    siteName: "Digioutreach",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digioutreach | Strategic Digital Marketing Advisor",
    description: "Your digital marketing doesn’t need more effort and money. It needs clarity on what to stop.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <GridBackground />
        {children}
      </body>
    </html>
  );
}
