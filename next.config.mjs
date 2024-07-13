/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
            hostname: 'images.vexels.com'
        }],
}
}

export default nextConfig;
