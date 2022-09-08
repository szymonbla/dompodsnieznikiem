/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/diwbhjogl/image/upload/'
  },
  env: {
    EMAIL_SERVICE_ID: 'service_itovlr9',
    EMAIL_TEMPLATE_ID: 'template_6nejtad',
    EMAIL_PUBLIC_KEY: 'B1-4f6l2uUfVN2d96'
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};

module.exports = nextConfig;
