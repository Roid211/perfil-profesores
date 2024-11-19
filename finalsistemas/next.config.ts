import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Activa el modo estricto de React
  images: {
    domains: ['utp.ac.pa', 'picsum.photos'],  // Agrega los dominios aquí
  },
};

export default nextConfig;
