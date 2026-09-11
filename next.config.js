/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['he'],
    defaultLocale: 'he',
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'תאכלס - הכי זול בארץ',
  },
};

module.exports = nextConfig;
