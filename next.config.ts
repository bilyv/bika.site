import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: true,
  },
  // Set the root to the current directory to stop scanning upwards for lockfiles
  // @ts-ignore
  turbopack: {
    root: typeof process !== 'undefined' ? process.cwd() : ".",
  },
};

export default nextConfig;
