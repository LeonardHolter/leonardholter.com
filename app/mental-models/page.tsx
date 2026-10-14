import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mental Models — Leonard Holter",
  description: "A short list of mental models Leonard Holter thinks with.",
  alternates: {
    canonical: "https://leonardholter.com/mental-models",
  },
};

export default function Page() {
  return (
    <>
      <style>{`
        html, body {
          background: #fff;
        }
        .plain-page {
          min-height: 100vh;
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
        .plain-page .footer-link {
          margin-top: 48px;
          font-size: 14px;
        }
      `}</style>

      <main className="plain-page">
        <h1>Mental Models</h1>

        <ul>
          <li>Proof by contradiction</li>
          <li>What incentives are involved</li>
        </ul>

        <p className="footer-link">
          <Link href="/">Back</Link>
        </p>
      </main>
    </>
  );
}
