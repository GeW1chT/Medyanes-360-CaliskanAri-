/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    experimental: {
        appDir: true
    },
    // Ensure that webpack is properly configured
    webpack: (config) => {
        return config;
    }
}

module.exports = nextConfig