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
    domains: ['rotang.ua'],
  },
  i18n: {
    locales: ['ua', 'de', 'en'],
    defaultLocale: 'ua',
  }
}

module.exports = nextConfig
