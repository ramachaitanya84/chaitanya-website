import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for next-mdx-remote to work with Turbopack
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
