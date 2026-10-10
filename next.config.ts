import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 768, 1024, 1280, 1440, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  // Allows .jpg extension for PNG files copied as .jpg
  experimental: {},
};

export default nextConfig;
