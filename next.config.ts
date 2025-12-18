import createNextIntlPlugin from 'next-intl/plugin';
import {NextConfig} from "next";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    images: {
        remotePatterns: [
            { protocol: "https", hostname: 'cdn2.iconfinder.com'}
        ]
    },
    env: {
        gAnalyticsID: 'G-FVXXJJRYNQ'
    }
};

export default withNextIntl(nextConfig);