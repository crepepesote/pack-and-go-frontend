/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ⚠️ Ignora errores de TypeScript durante el build
    ignoreBuildErrors: true,
  },
  eslint: {
    // También ignora errores de ESLint si los hay
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig