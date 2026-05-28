/** @type {import('next').NextConfig} */
const assetsOrigin = process.env.ORVIBO_ASSETS_ORIGIN?.replace(/\/$/, "");

const nextConfig = {
  images: {
    remotePatterns: assetsOrigin
      ? [
          {
            protocol: new URL(assetsOrigin).protocol.replace(":", ""),
            hostname: new URL(assetsOrigin).hostname,
            pathname: "/**",
          },
        ]
      : [],
  },
  async rewrites() {
    if (!assetsOrigin) return [];

    return [
      {
        source: "/guanwang_second/:path*",
        destination: `${assetsOrigin}/guanwang_second/:path*`,
      },
      {
        source: "/orvibo/:path*",
        destination: `${assetsOrigin}/orvibo/:path*`,
      },
      {
        source: "/8f4239b1vodgzp1251222210/:path*",
        destination: `${assetsOrigin}/8f4239b1vodgzp1251222210/:path*`,
      },
    ];
  },
};

export default nextConfig;
