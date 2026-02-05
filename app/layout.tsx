import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
      <head>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1232439418395235');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1232439418395235&ev=PageView&noscript=1"
          />
        </noscript>
        <GridBackground />
        {children}
      </body>
    </html>
  );
}
