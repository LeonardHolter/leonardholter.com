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

        .books-section {
          padding: 64px 0 48px;
        }
        .books-header {
          font-family: var(--serif);
          font-weight: 400;
          font-size: clamp(36px, 5vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin: 0 0 32px;
        }
        .book-badge {
          font-family: var(--sans);
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: #f5dfa0;
          color: var(--ink);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 16px;
        }
        .books-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .book-card {
          background: #ece8dd;
          border-radius: 12px;
          padding: 40px 28px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .book-cover {
          width: 140px;
          height: 200px;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          margin-bottom: 20px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          flex-shrink: 0;
        }
        .book-title {
          font-family: var(--serif);
          font-size: 18px;
          line-height: 1.35;
          font-weight: 500;
          margin: 0 0 16px;
          color: var(--ink);
        }
        .book-link {
          font-family: var(--sans);
          font-size: 13px;
          letter-spacing: 0.04em;
          color: var(--ink);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid var(--ink);
          padding-bottom: 1px;
          transition: opacity 200ms ease;
        }
        .book-link:hover { opacity: 0.6; }

        @media (max-width: 900px) {
          .books-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .books-grid {
            grid-template-columns: 1fr;
          }
          .books-section { padding: 48px 0 36px; }
          .book-cover { width: 120px; height: 170px; }
        }

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
              src="/leonard-holter.jpg"
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
              I competed in{" "}
              <a
                className="prose-link"
                href="https://no.wikipedia.org/wiki/Leonard_Holter"
                target="_blank"
                rel="noopener noreferrer"
              >
                karate
              </a>{" "}
              for Norway, and moved to the United States to study at Columbia
              University.
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

        <hr className="rule" />

        <section className="books-section" aria-label="Recent Books">
          <h2 className="books-header">Recent Books</h2>
          <div className="books-grid">
            <div className="book-card">
              <div className="book-badge">Currently Reading</div>
              <div className="book-cover" style={{ background: "#1a2332", display: "flex", alignItems: "center", justifyContent: "center", padding: 12 }}>
                <span style={{ color: "#c4a44a", fontFamily: "var(--serif)", fontSize: 13, lineHeight: 1.3, textAlign: "center", fontWeight: 500 }}>
                  Berkshire Hathaway<br />Letters to<br />Shareholders<br /><span style={{ fontSize: 10, opacity: 0.7 }}>1965–2024</span>
                </span>
              </div>
              <h3 className="book-title">
                Berkshire Hathaway Letters to Shareholders, 1965–2024
              </h3>
            </div>
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
