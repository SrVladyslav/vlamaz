/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.vlamaz.com',
            port: '',
            pathname: '/**',
          }
        ]
    },
    // output: 'export',
    reactStrictMode: true,
    // transpilePackages: ['three'],
};

export default nextConfig;
