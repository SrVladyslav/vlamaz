import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

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
    reactStrictMode: true,
    // transpilePackages: ['three'],
};

// export default nextConfig;
export default bundleAnalyzer(nextConfig)