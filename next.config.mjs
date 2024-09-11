/** @type {import('next').NextConfig} */

// const path = require('path');

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
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        // ignoreBuildErrors: true,
        include: [
            "new-types.d.ts",
            "next-env.d.ts",
            ".next/types/**/*.ts",
            "**/*.ts",
            "**/*.tsx"
        ],
        exclude: ["node_modules"]
    }
};

export default nextConfig;
