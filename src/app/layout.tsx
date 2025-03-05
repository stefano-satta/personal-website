import React from "react";
import './../styles/app.scss';
import {GoogleAnalytics} from "@next/third-parties/google";



export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>{children}</body>
            <GoogleAnalytics gaId="G-FVXXJJRYNQ" />
        </html>
    );
}