// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Solo para emergencias, ignora errores de tipado durante el build
    ignoreBuildErrors: true
  },
  eslint: {
    // Solo para emergencias, ignora errores de linting durante el build
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;