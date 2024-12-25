import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    customKey: 'Holy',
    API_URL: process.env.API_URL,
    SERVER_API_URL: process.env.SERVER_API_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_URL_INTERNAL,
    CLIENT_FETCH_ERROR: process.env.CLIENT_FETCH_ERROR,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  modularizeImports: {
    '@mui/*': {
      transform: '@mui/$1',
    },
  },
  experimental: {
    esmExternals: true,
  },
  eslint: {
    dirs: ['./src/*'],
    ignoreDuringBuilds: true,
  },
  compiler: {
    emotion: true,
    styledComponents: true,
  },
};

export default nextConfig;
