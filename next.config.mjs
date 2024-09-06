/** @type {import('next').NextConfig} */

const optimizelyCmsUrl = new URL(process.env.OPTIMIZELY_CMS_URL ?? 'http://localhost:3000')

const nextConfig = {
    images: {
        remotePatterns: [
            // Allow images from the configured Optimizely CMS URL
            {
                protocol: optimizelyCmsUrl.protocol.replace(':',''),
                hostname: optimizelyCmsUrl.hostname,
                port: optimizelyCmsUrl.port,
                pathname: '/globalassets/**',
            }
        ],
    }
};

export default nextConfig;
