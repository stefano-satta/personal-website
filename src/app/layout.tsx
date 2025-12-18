import React from "react";
import './../styles/app.scss';
import {GoogleAnalytics} from "@next/third-parties/google";
import {Lato} from "next/font/google";

const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    display: 'swap'
})


export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={lato.className} data-scroll-behavior="smooth">{children}</body>
            <GoogleAnalytics gaId={process.env.gAnalyticsID as string} />
        </html>
    );
}