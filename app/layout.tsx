import type { Metadata } from "next";
import { DM_Serif_Display, Public_Sans } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const serif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });
const sans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayAPI",
  description: "Start building with our APIs for absolutely free.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${serif.className} ${sans.className}`}>
        <div className="wrapper">
          <Nav />

          <main>{children}</main>

          <CTA />
          <Footer />
        </div>
      </body>
    </html>
  );
}
