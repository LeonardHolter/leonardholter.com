import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leonard Holter",
  description:
    "Leonard Holter is the Founder & Chairman of Holter Holdings, acquiring small, profitable businesses for the long term.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Leonard Holter",
              url: "https://www.holterholdings.com/",
              image: "https://leonardholter.com/leonard-holter.jpg",
              description:
                "Chairman at Holter Holdings LLC. CS student at Columbia College.  Professional karate athlete.",
              sameAs: [
                "https://no.wikipedia.org/wiki/Leonard_Holter",
                "https://www.youtube.com/@LeonardAleksanderHolter",
              ],
              jobTitle: "Managing Partner",
              worksFor: {
                "@type": "Organization",
                name: "Holter Holdings LLC",
                url: "https://www.holterholdings.com/",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
