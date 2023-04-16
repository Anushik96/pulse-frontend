/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  images: {
    disableStaticImages: true,
  },
  assetPrefix: './',
  sass: true,
  images: {
        domains: ['https://anushik96.github.io'],
  }
}

module.exports = nextConfig
