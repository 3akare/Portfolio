import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sfPro = localFont({
    src: "./fonts/SFProDisplay-Regular.woff",
    variable: "--font-sf-pro",
    weight: "100 900"
})

export const metadata: Metadata = {
  title: "David Bakare",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
