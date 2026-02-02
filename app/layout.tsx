import type { Metadata } from "next";
import "./globals.css";
import GridBackground from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "Kapil Chandak | Strategic Digital Marketing Advisor",
  description: "Stop wasting budget on digital marketing. Kapil Chandak provides strategic clarity to founders on what to stop and what to multiply. No tools, just decisions.",
  keywords: ["Digital Marketing Strategy", "Marketing Audit", "Founder Clarity", "Kapil Chandak", "CA Kapil Chandak", "Business Growth"],
  openGraph: {
    title: "Kapil Chandak | Strategic Digital Marketing Advisor",
    description: "Your digital marketing doesn’t need more effort and money. It needs clarity on what to stop.",
    type: "website",
    locale: "en_US",
    siteName: "Kapil Chandak",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapil Chandak | Strategic Digital Marketing Advisor",
    description: "Your digital marketing doesn’t need more effort and money. It needs clarity on what to stop.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <GridBackground />
        {children}
      </body>
    </html>
  );
}
