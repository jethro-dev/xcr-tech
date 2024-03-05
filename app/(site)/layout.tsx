import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import localFont from "next/font/local";
import PlaceholderNav from "@/components/placeholder-nav";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});
// Font files can be colocated inside of `pages`
// Font files can be colocated inside of `app`
const thunder = localFont({
  src: "./thunder.ttf",
  display: "swap",
  variable: "--font-thunder",
});
const akony = localFont({
  src: "./akony.woff",
  display: "swap",
  variable: "--font-akony",
});

export const metadata: Metadata = {
  title: {
    default: "XCR Tech",
    template: "%s - XCR TECH",
  },
  description: "XCR Tech is.... description.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${akony.variable} ${montserrat.variable} ${thunder.variable} font-montserrat`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
