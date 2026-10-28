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
          font-family: "Times New Roman", Times, serif;
          color: #000;
          background: #fff;
          max-width: 700px;
          margin: 0;
          font-size: 15px;
          padding: 16px 24px 64px;
          line-height: 1.15;
        }
        .plain-page h1 {
          font-size: 18px;
          font-weight: bold;
          margin: 0 0 14px;
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
        .plain-page .footer-link {
          margin-top: 32px;
        }
      `}</style>

      <main className="plain-page">
        <h1>Mental Models</h1>

        <ul>
          <li>Proof by contradiction</li>
          <li>What incentives are involved</li>
          <li>Reciprocation tendency</li>
        </ul>

        <p className="footer-link">
          <Link href="/">Back</Link>
        </p>
      </main>
    </>
  );
}
