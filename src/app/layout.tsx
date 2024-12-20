import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({subsets: ['latin']})
export const metadata: Metadata = {
    title: "3akare",
    description: "David Bakare — I’m driven to build awesome things",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
