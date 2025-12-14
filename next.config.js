/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/EfRmVEHh2G",
        permanent: true,
      },
      {
        source: "/store",
        destination: "coming",
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
