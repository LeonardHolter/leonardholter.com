import type { Metadata } from "next";
import Image from "next/image";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

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
        url: "/leonard.jpeg",
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
    images: ["/leonard.jpeg"],
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
  image: "https://leonardholter.com/leonard.jpeg",
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
    "https://www.linkedin.com/in/leonard-aleksander-holter-4253b9388/",
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
        :root {
          --bg: #f5f1e8;
          --ink: #2d3f2d;
          --ink-soft: #5a6a5a;
          --rule: #d8d2c2;
          --serif: var(--font-cormorant), "Garamond", "Times New Roman", serif;
          --sans: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
        }

        html, body {
          background: var(--bg);
          color: var(--ink);
          font-family: var(--serif);
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .prose-link {
          color: inherit;
          text-decoration: none;
          border-bottom: 1px solid var(--rule);
          transition: border-color 200ms ease, color 200ms ease;
        }
        .prose-link:hover { border-bottom-color: var(--ink); }

        .page {
          max-width: 920px;
          margin: 0 auto;
          padding: 56px 40px 96px;
        }

        .mark {
          text-align: center;
          font-family: var(--serif);
          font-size: 18px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 500;
          padding-bottom: 96px;
        }

        .hero {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 56px;
          align-items: start;
          padding-bottom: 64px;
        }

        .portrait {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          background: #ddd;
          position: relative;
          flex-shrink: 0;
        }

        h1 {
          font-family: var(--serif);
          font-weight: 400;
          font-size: clamp(44px, 6.4vw, 76px);
          line-height: 1.02;
          letter-spacing: -0.01em;
          margin: -8px 0 20px;
        }
        h1 em {
          font-style: italic;
          font-weight: 400;
        }

        .lede {
          font-family: var(--serif);
          font-size: 22px;
          line-height: 1.5;
          color: var(--ink-soft);
          max-width: 56ch;
          margin: 0;
        }

        .rule {
          border: 0;
          border-top: 1px solid var(--rule);
          margin: 0;
        }

        .about {
          padding: 48px 0;
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 56px;
        }
        .about .label {
          font-family: var(--sans);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-soft);
          padding-top: 6px;
        }
        .about p {
          font-family: var(--serif);
          font-size: 22px;
          line-height: 1.55;
          margin: 0 0 18px;
          max-width: 56ch;
        }
        .about p:last-child { margin-bottom: 0; }

        footer {
          padding-top: 48px;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-family: var(--sans);
          font-size: 12px;
          letter-spacing: 0.08em;
          color: var(--ink-soft);
        }
        footer a { transition: color 200ms ease; }
        footer a:hover { color: var(--ink); }
        footer .right a { margin-left: 24px; }

        @media (max-width: 720px) {
          .page { padding: 36px 24px 72px; }
          .mark { padding-bottom: 64px; font-size: 15px; }
          .hero, .about {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .portrait { width: 140px; height: 140px; }
          .lede { font-size: 19px; }
          .about p { font-size: 19px; }
          footer { flex-direction: column; gap: 12px; }
          footer .right a { margin-left: 0; margin-right: 20px; }
        }
      `}</style>

      <main
        className={`page ${cormorant.variable} ${inter.variable}`}
      >
        <div className="mark">Leonard Holter</div>

        <section className="hero" aria-labelledby="headline">
          <div className="portrait">
            <Image
              src="/leonard.jpeg"
              alt="Leonard Holter, Founder and Chairman of Holter Holdings"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 720px) 140px, 200px"
            />
          </div>
          <div>
            <h1 id="headline">
              Buying great
              <br />
              businesses, <em>quietly</em>.
            </h1>
            <p className="lede">
              Founder &amp; Chairman of{" "}
              <a
                className="prose-link"
                href="https://www.holterholdings.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Holter Holdings
              </a>
              .
            </p>
          </div>
        </section>

        <hr className="rule" />

        <section className="about" aria-label="About Leonard Holter">
          <div className="label">About</div>
          <div>
            <p>
              I grew up in Norway and moved to the United States to study at
              Columbia University.
            </p>
            <p>
              Today I run{" "}
              <a
                className="prose-link"
                href="https://www.holterholdings.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Holter Holdings
              </a>
              , where we acquire small, profitable businesses and hold them for
              the long term.
            </p>
          </div>
        </section>

        <footer>
          <div>© 2026 Leonard Holter</div>
          <div className="right">
            <a
              href="https://www.linkedin.com/in/leonard-aleksander-holter-4253b9388/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:leonard@holterholdings.com">Email</a>
          </div>
        </footer>
      </main>
    </>
  );
}
