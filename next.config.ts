import type { NextConfig } from "next";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
const BACKEND_ORIGIN = (() => {
  try {
    return new URL(API_BASE).origin;
  } catch {
    return "http://localhost:5000";
  }
})();

const nextConfig: NextConfig = {
  // Cho phép dynamic rendering với backend server
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `${BACKEND_ORIGIN}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
