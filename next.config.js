/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        const path = require('path');

        config.resolve.alias['@supabase'] = path.join(
            __dirname,
            'server/services/supabase/supabase.ts'
        );
        config.resolve.alias['@src'] = path.join(__dirname, 'src/');
        config.resolve.alias['@server'] = path.join(__dirname, 'server/');
        config.resolve.alias['@server_src'] = path.join(
            __dirname,
            'server/src/'
        );
        config.resolve.alias['@public'] = path.join(__dirname, 'public/');
        config.resolve.alias['@api'] = path.join(__dirname, 'src/pages/api/');
        config.resolve.alias['@pages'] = path.join(__dirname, 'src/pages/');
        config.resolve.alias['@components'] = path.join(
            __dirname,
            'src/components/'
        );
        config.resolve.alias['@assets'] = path.join(__dirname, 'src/assets/');
        config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles/');
        config.resolve.alias['@utils'] = path.join(__dirname, 'src/utils/');

        return config;
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
