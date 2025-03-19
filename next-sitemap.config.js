// next-sitemap.config.js

module.exports = {
  siteUrl: 'https://www.kravion.com', // Remove trailing slash for consistency
  generateRobotsTxt: true,
  changefreq: 'weekly', // Default change frequency
  priority: 0.7, // Default priority for all pages
  sitemapSize: 5000, // Ensure sitemaps are optimized for crawling
  generateIndexSitemap: true, // Enable index sitemap for better structure

  exclude: [
    '/webdesign', // Exclude specific low-priority pages
    '/uiux/*', // Exclude UI/UX pages
    '/About/*', // Ensure admin routes aren’t crawled
    '/seo', // Internal pages
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }, // Allow all pages by default
      { userAgent: '*', disallow: ['/admin/', '/dashboard', '/webdesign', '/uiux/'] }, // Block non-relevant pages
    ],
    additionalSitemaps: [
      'https://www.kravion.com/sitemap.xml', // Ensure additional sitemaps are referenced
    ],
  },

  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    // Prioritize important pages
    if (path === '/') {
      priority = 1.0; // Homepage has the highest priority
      changefreq = 'daily';
    } else if (path.startsWith('/blog')) {
      priority = 0.9; // Blog content is important for SEO
      changefreq = 'daily';
    } else if (path.startsWith('/services')) {
      priority = 0.8; // Service pages should be prioritized
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
