/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    //   },
    env: {
        SPACE_ID: "",
        CONTENTFUL_ACCESS_KEY: ""
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
