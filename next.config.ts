import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/digital-marketing-clarity-audit',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
