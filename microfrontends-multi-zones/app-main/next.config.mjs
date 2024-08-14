/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: '/login',
                destination: 'http://localhost:3001',
            },
            {
                source: '/login/:path*',
                destination: 'http://localhost:3001/:path*',
            }
        ];
    },
};

export default nextConfig;
