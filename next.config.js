const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['rotang.ua', 'localhost'],
  },
  i18n: {
    locales: ['ua', 'de', 'en'],
    defaultLocale: 'ua',
    localeDetection: false,
  }
}

module.exports = nextConfig
