/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/diwbhjogl/image/upload/'
  }
};

module.exports = nextConfig;
