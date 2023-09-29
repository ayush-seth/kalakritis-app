/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "elasticbeanstalk-ap-south-1-906406233275.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
