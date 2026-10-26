import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leonard Holter",
  description: "Leonard Holter",
  openGraph: {
    type: "profile",
    title: "Leonard Holter",
    description: "Leonard Holter",
    url: "https://leonardholter.com",
    siteName: "Leonard Holter",
    firstName: "Leonard",
    lastName: "Holter",
  },
  twitter: {
    card: "summary",
    title: "Leonard Holter",
    description: "Leonard Holter",
  },
  alternates: {
    canonical: "https://leonardholter.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonard Holter",
  alternateName: "Leonard Aleksander Holter",
  url: "https://leonardholter.com",
  sameAs: [
    "https://www.linkedin.com/in/leonardholter/",
    "https://no.wikipedia.org/wiki/Leonard_Holter",
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
          font-family: "Times New Roman", Times, serif;
          font-size: 15px;
          color: #000;
          background: #fff;
          max-width: 700px;
          margin: 0;
          padding: 16px 24px 64px;
          line-height: 1.15;
        }
        .plain-page h1 {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 14px;
        }
        .plain-page h2 {
          font-size: 17px;
          font-weight: bold;
          margin: 20px 0 14px;
        }
        .plain-page p {
          margin: 0 0 14px;
        }
        .plain-page a {
          color: #00e;
          text-decoration: underline;
        }
        .plain-page a:visited {
          color: #551a8b;
        }
        .plain-page ul {
          margin: 0 0 14px;
          padding-left: 40px;
        }
        .plain-page li {
          margin: 0;
        }
        .plain-page .bio p {
          margin: 0;
        }
        .plain-page .footer-link {
          margin-top: 32px;
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

        <p className="footer-link">
          <Link href="/mental-models">Mental models</Link>
        </p>
      </main>
    </>
  );
}
