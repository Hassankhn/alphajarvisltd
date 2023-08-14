/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    //   },
    env: {
        SPACE_ID: "7n1wpolbuoc2",
        CONTENTFUL_ACCESS_KEY: "kgLfPVdLINdjHLP0TR1YZoLt0jeCDavBChmydXwkeUw"
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
