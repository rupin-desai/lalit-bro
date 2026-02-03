import type { Metadata } from "next";
import "./globals.css";
import GridBackground from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "Digital Marketing Clarity Audit for Founders | CA Kapil Chandak",
  description: "Have a digital marketing team or agency but results aren’t matching expectations? A 45–60 min clarity audit to identify what to stop, what to multiply, and what’s blocking ROI.",
  keywords: ["Digital Marketing Strategy", "Marketing Audit", "Founder Clarity", "CA Kapil Chandak", "Business Growth"],
  openGraph: {
    title: "Digital Marketing Clarity Audit for Founders | CA Kapil Chandak",
    description: "Have a digital marketing team or agency but results aren’t matching expectations? A 45–60 min clarity audit to identify what to stop, what to multiply, and what’s blocking ROI.",
    type: "website",
    locale: "en_US",
    siteName: "CA Kapil Chandak",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Clarity Audit for Founders | CA Kapil Chandak",
    description: "Have a digital marketing team or agency but results aren’t matching expectations? A 45–60 min clarity audit to identify what to stop, what to multiply, and what’s blocking ROI.",
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
