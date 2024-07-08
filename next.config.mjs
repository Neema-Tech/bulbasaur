/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === 'development';

const nextConfig = {
  basePath: isDevelopment ? "" : "/bulbasaur",
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true }
};

export default nextConfig;