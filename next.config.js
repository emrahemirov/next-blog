/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pages/0',
        permanent: true
      }
    ];
  },
  images: {
    domains: ['i.picsum.photos', 'picsum.photos']
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    DB_STRING: process.env.DB_STRING
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  }
};

module.exports = nextConfig;
