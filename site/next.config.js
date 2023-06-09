/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'CD-IT Services',
    description: 'Unofficial Kasm Workspaces registry by CD-IT Services',
    icon: '/img/logo.svg',
    listUrl: 'https://duelistrag3.github.io/kasm-registry/',
    contactUrl: 'https://christian-dullin.de',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
