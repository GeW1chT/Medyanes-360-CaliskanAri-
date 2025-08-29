/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabling strict mode can help with some rendering issues
  reactStrictMode: false,
  // Swcminify enabled by default
  swcMinify: true,
  // Disable unnecessary server components
  experimental: {
    appDir: true,
  },
};

export default nextConfig;