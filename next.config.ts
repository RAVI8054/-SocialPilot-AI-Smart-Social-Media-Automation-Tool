import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Disable ESLint from blocking Vercel builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ...add your other config options below if needed
};

export default nextConfig;
