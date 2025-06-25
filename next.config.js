/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  transpilePackages: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
  images: {
    domains: [
      "ultimatefitness.cl",
      "ultimatefitness.com.co",
      "ultimatefitness.pe",
      "ultimatefitness.com.mx",
      "ultimatefitnessco.cdn.prismic.io",
      "mundo-salud-store-3.mybigcommerce.com",
      "mundo-salud-store-2.mybigcommerce.com",
      "picsum.photos",
      "bigcommerce.com",
      "cdn11.bigcommerce.com",
      "images.prismic.io",
      "ultimatefitness.cdn.prismic.io",
      "ultimatefitnesspe.cdn.prismic.io",
      "ultimatefitnessco.cdn.prismic.io",
      "aquaforce.cdn.prismic.io",
      "mega.nz",
      "i.picsum.photos",
      "grupo-vita.mybigcommerce.com",
      "scontent.cdninstagram.com",
      "www.instagram.com",
      "res.cloudinary.com",
    ],
    formats: ["image/webp"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig; 