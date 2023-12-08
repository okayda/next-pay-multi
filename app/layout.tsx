import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = DM_Serif_Display({ subsets: ["latin"], weight: ["400"] });

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
      <body className={inter.className}>
        <Nav />

        <main>
          <section>{children}</section>
        </main>

        <Footer />
      </body>
    </html>
  );
}
