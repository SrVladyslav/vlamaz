import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        root: __dirname,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.vlamaz.com',
            port: '',
            pathname: '/**',
          }
        ]
    },
    reactStrictMode: true,
    // transpilePackages: ['three'],
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; img-src 'self' https://cdn.vlamaz.com data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
                    },
                ],
            },
        ];
    },
};

// export default nextConfig;
export default bundleAnalyzer(nextConfig)