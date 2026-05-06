import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceTax – Track Expenses & Optimize Tax Deductions",
  description: "Categorize freelancer expenses, automate tax deductions, and never miss a quarterly tax payment. Built for freelancers, consultants, and contractors."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="67f0395e-4c79-4a99-bc41-5e181b44c40e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
