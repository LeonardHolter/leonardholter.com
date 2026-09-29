import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leonard Holter",
  description:
    "Leonard Holter is the Founder & Chairman of Holter Holdings, acquiring small, profitable businesses for the long term. Grew up in Norway, studied at Columbia University.",
  keywords: [
    "Leonard Holter",
    "Holter Holdings",
    "Leonard Aleksander Holter",
    "Holter Holdings founder",
    "business acquisition",
    "Columbia University",
    "Norway",
  ],
  authors: [{ name: "Leonard Holter" }],
  creator: "Leonard Holter",
  openGraph: {
    type: "profile",
    title: "Leonard Holter",
    description:
      "Founder & Chairman of Holter Holdings. Buying great businesses, quietly.",
    url: "https://leonardholter.com",
    siteName: "Leonard Holter",
    images: [
      {
        url: "/leonard-holter.jpg",
        width: 800,
        height: 800,
        alt: "Leonard Holter",
      },
    ],
    firstName: "Leonard",
    lastName: "Holter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonard Holter",
    description:
      "Founder & Chairman of Holter Holdings. Buying great businesses, quietly.",
    images: ["/leonard-holter.jpg"],
  },
  alternates: {
    canonical: "https://leonardholter.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonard Holter",
  alternateName: "Leonard Aleksander Holter",
  description:
    "Founder and Chairman of Holter Holdings, acquiring small profitable businesses for the long term.",
  url: "https://leonardholter.com",
  image: "https://leonardholter.com/leonard-holter.jpg",
  jobTitle: "Founder & Chairman",
  worksFor: {
    "@type": "Organization",
    name: "Holter Holdings",
    url: "https://www.holterholdings.com/",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Columbia University",
  },
  nationality: "Norwegian",
  sameAs: [
    "https://www.holterholdings.com/",
    "https://www.linkedin.com/in/leonardholter/",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        .plain-page {
          font-family: Georgia, "Times New Roman", Times, serif;
          color: #000;
          background: #fff;
          max-width: 700px;
          margin: 0;
          padding: 48px 24px 96px;
          line-height: 1.5;
        }
        .plain-page h1 {
          font-size: 28px;
          font-weight: bold;
          margin: 0 0 16px;
        }
        .plain-page h2 {
          font-size: 22px;
          font-weight: bold;
          margin: 40px 0 16px;
        }
        .plain-page p {
          font-size: 17px;
          margin: 0 0 16px;
        }
        .plain-page a {
          color: #00e;
          text-decoration: underline;
        }
        .plain-page a:visited {
          color: #551a8b;
        }
        .plain-page ul {
          margin: 0;
          padding-left: 24px;
        }
        .plain-page li {
          font-size: 17px;
          margin-bottom: 8px;
        }
        .plain-page .bio p {
          margin: 0;
        }
      `}</style>

      <main className="plain-page">
        <h1>Leonard Holter</h1>

        <p>
          <a
            href="https://www.linkedin.com/in/leonardholter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          &middot;{" "}
          <a href="mailto:leonard@columbia.edu">Email</a>
        </p>

        <h2>About</h2>

        <div className="bio">
          <p>Grew up in Norway.</p>
          <p>Sold cookies at 5.</p>
          <p>Did dropshipping at 10.</p>
          <p>
            Started the largest team-based{" "}
            <a
              href="https://www.stord24.no/nyhende/n/93vwzq/selevik-skule-heilt-til-topps-i-mattekonkurranse"
              target="_blank"
              rel="noopener noreferrer"
            >
              math competition
            </a>{" "}
            in the Nordics.
          </p>
          <p>
            Competed in{" "}
            <a
              href="https://no.wikipedia.org/wiki/Leonard_Holter"
              target="_blank"
              rel="noopener noreferrer"
            >
              karate
            </a>{" "}
            internationally for Norway.
          </p>
          <p>Moved to the United States to study at Columbia University.</p>
        </div>

        <h2>Books I Recommend</h2>
        <ul>
          <li>Letters to Shareholders &mdash; Warren Buffett</li>
          <li>Poor Charlie&rsquo;s Almanack &mdash; Charles T. Munger</li>
          <li>The Odyssey &mdash; Homer</li>
          <li>Inferno &mdash; Dante Alighieri</li>
          <li>The Bible</li>
        </ul>
      </main>
    </>
  );
}
