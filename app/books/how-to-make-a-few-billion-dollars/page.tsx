import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "How to Make a Few Billion Dollars — Brad Jacobs",
  description:
    "A favorite quote from Brad Jacobs' How to Make a Few Billion Dollars.",
};

export default function BookQuotePage() {
  return (
    <>
      <style>{`
        html, body {
          background: #f5f1e8;
          color: #2d3f2d;
          margin: 0;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        .quote-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
        }
        .quote-text {
          font-family: var(--font-cormorant), "Garamond", "Times New Roman", serif;
          font-style: italic;
          font-weight: 400;
          font-size: clamp(28px, 5vw, 52px);
          line-height: 1.3;
          letter-spacing: -0.01em;
          text-align: center;
          max-width: 22ch;
          margin: 0;
        }
      `}</style>
      <main className={`quote-page ${cormorant.variable}`}>
        <blockquote className="quote-text">
          &ldquo;You can mess up a lot of things in business and still do well as
          long as you get the big trend right.&rdquo;
        </blockquote>
      </main>
    </>
  );
}
