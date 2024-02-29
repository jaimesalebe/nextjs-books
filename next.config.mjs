/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8080'
            },
        ],
    },
    async redirects() {
        return [{
            source: '/',
            destination: '/books',
            permanent: true
        }]
    }
};

export default nextConfig;
