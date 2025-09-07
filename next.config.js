/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Arabic pretty paths -> query param for sections
      { source: '/المحادثة', destination: '/?section=chat' },
      { source: '/المميزات', destination: '/?section=features' },
      { source: '/التقييمات', destination: '/?section=reviews' },
      { source: '/عن-التطبيق', destination: '/?section=about' },

      // English fallbacks so typing /chat or /features works too
      { source: '/chat', destination: '/?section=chat' },
      { source: '/features', destination: '/?section=features' },
      { source: '/reviews', destination: '/?section=reviews' },
      { source: '/about', destination: '/?section=about' },
    ];
  },
};

module.exports = nextConfig;

