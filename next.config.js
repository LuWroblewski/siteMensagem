/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export const config = {
  env: {
    MONGO_URI: 'mongodb+srv://teste:teste123@cluster0.1ylmc4y.mongodb.net/site-messages',
  },
};
module.exports = nextConfig;
