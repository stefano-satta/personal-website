'use client';

import Error from 'next/error';

export default function NotFound() {

    return (
        <html lang={''}>
            <body>
                <Error statusCode={404} />
            </body>
        </html>
    );
}