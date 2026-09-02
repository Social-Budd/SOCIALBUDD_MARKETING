import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The whole site is static, so emit a static export to `out/` that Cloudflare
  // serves directly as assets (no Worker runtime). See wrangler.jsonc.
  output: "export",
};

export default nextConfig;
