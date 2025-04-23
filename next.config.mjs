/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/BigBattles",
  reactStrictMode: true,
};

export default nextConfig;
