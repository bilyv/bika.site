import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
  },
  // Set the root to the current directory to stop scanning upwards for lockfiles
  // @ts-ignore
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
