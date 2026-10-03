/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
        // Self-hosted Strapi backend (currently plain HTTP). Images are still
        // served to the browser through /_next/image on the same origin, so
        // there is no mixed-content issue.
        {
            protocol: 'http',
            hostname: '45.76.182.174',
            port: '1337',
            pathname: '/uploads/**',
        },
    ],
    qualities: [70, 75, 85],
},
};

export default nextConfig;
