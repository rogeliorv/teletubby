// Fill this with the pages you dont want to show in sitemap
const ignoredPagesPatterns = [];

const isPathIgnored = (path) => {
  return ignoredPagesPatterns.indexOf(path) !== -1;
};

const getChangeFrequency = (path, defaultFrequency) => {
  // Fill this with the pages you want to show in sitemap with weekly frequency
  const weeklyFrequencyPatterns = [];

  for (const pattern of weeklyFrequencyPatterns) {
    if (path.indexOf(pattern) !== -1) {
      return 'weekly';
    }
  }

  return defaultFrequency || 'daily';
};

/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  siteUrl: 'https://teletubbybot.vercel.app',
  changefreq: 'daily',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  transform: async (config, path) => {
    // custom function to ignore the path
    if (isPathIgnored(path)) {
      return null;
    }

    const changeFrequency = getChangeFrequency(path, config.changefreq);

    // Use default transformation for all other cases
    return {
      loc: path,
      changefreq: changeFrequency,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
