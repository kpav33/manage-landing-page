/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr", "si"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
