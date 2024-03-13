/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: '@import "./src/styles/_variables.scss";@import "./src/styles/mixins/mixins.scss";',
  },
  reactStrictMode: false,
};

export default nextConfig;
