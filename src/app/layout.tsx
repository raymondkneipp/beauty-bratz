import type { Metadata } from "next";
import { Mona_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const monoSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
    axes: ["wdth"],
});

const dancingScript = Dancing_Script({
    variable: "--font-dancing-script",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Beauty Bratz",
    description:
        "Beauty Bratz specializes in custom hair pieces and wigs. We also cut, trim, color, and style hair.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${monoSans.variable} ${dancingScript.variable} bg-neutral-950 antialiased font-sans`}
            >
                {children}
            </body>
        </html>
    );
}
