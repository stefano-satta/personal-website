import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    images: {
        domains: ['cdn2.iconfinder.com']
    }
};

export default withNextIntl(nextConfig);