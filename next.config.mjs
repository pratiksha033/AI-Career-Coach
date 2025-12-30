/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ["randomuser.me"], // <-- add this line
  },
};

export default nextConfig;
