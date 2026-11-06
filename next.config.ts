import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  poweredByHeader: false,
  images: { qualities: [75, 85] },
};
export default nextConfig;
