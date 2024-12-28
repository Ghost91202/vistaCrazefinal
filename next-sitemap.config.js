// next-sitemap.config.js

module.exports = {
  siteUrl: 'https://www.Kravion.com/',
  generateRobotsTxt: true,
  changefreq: 'weekly', // Change frequency for all pages
  priority: 0.7, // Default priority for all pages
  sitemapSize: 5000, // Maximum number of entries per sitemap file
  generateIndexSitemap: false, // Disable index sitemap generation if you don't need it
  exclude: [
    '/webdesign', // Exclude specific pages or paths
    '/uiux/*', // Exclude all pages under /admin
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.Kravion.com/sitemap.xml', // Add additional sitemaps if any
    ],
  },
  transform: async (config, path) => {
    // Custom transformation for each path
    return {
      loc: path, // Default loc
      changefreq: 'daily', // Custom change frequency
      priority: 0.9, // Custom priority
      lastmod: new Date().toISOString(), // Last modification date
    };
  },
};
