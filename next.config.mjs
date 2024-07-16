/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.vexels.com'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },

        ],
    }
}

export default nextConfig;
