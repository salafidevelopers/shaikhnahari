/** @type {import('next').NextConfig} */
import nextTranslate from "next-translate-plugin";

const nextConfig = nextTranslate({
  reactStrictMode: true,
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
});

export default nextConfig;
