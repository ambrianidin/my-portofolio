import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export -> menghasilkan folder ./out yang di-serve Cloudflare
  output: "export",
  // Image Optimization server tidak tersedia di static export
  images: { unoptimized: true },
  // Setiap route jadi folder/index.html -> URL tanpa .html
  trailingSlash: true,
};

export default nextConfig;
