const isProd = process.env.NODE_ENV === 'production';

const repo = 'MartinAmiens.github.io'; // nom du repo GitHub

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;
