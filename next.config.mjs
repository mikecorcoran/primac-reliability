import builderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "aistudiocdn.com",
      },
    ],
  },
};

// Only wrap with builderDevTools in development
export default process.env.NODE_ENV === 'development'
  ? builderDevTools()(nextConfig)
  : nextConfig;
