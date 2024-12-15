/** @type {import('next').NextConfig} */
const nextConfig = {
    //output: 'export',
    output: 'standalone', //En el repo de dockerfile lo recomiendan

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
      ],
      domains: ['images.unsplash.com'],
    },
  
  }
  
  export default nextConfig;