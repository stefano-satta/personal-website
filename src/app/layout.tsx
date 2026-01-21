import React from "react";
import './../styles/app.scss';
import {GoogleAnalytics} from "@next/third-parties/google";
import {Archivo_Black, Space_Grotesk} from "next/font/google";

const ArchivoBlack = Archivo_Black({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap'
});

const SpaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    display: 'swap'
});


export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <body className={`${ArchivoBlack.className} ${SpaceGrotesk.className}`}>{children}</body>
            <GoogleAnalytics gaId={process.env.gAnalyticsID as string} />
        </html>
    );
}