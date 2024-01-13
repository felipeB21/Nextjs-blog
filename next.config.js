/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
};

module.exports = {
  nextConfig,
  images: {
    domains: ["cdn.weatherapi.com"],
  },
};
