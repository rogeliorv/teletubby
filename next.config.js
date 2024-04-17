/* eslint-disable @typescript-eslint/no-var-requires */
// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => ({
  ...defaultConfig,
  staticPageGenerationTimeout: 1000,
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: false,
  swcMinify: true,
  poweredByHeader: false,

  // Do not include in the build pages with .dev.tsx for example
  // pageExtensions: ["ts", "tsx", "js", "jsx"]
  //   .map((extension) => {
  //     const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;
  //     const prodExtension = `(?<!dev\.)${extension}`;
  //     const devExtension = `dev\.${extension}`;
  //     return isDevServer ? [devExtension, extension] : prodExtension;
  //   })
  // .flat(),

  // Uncoment to add domain whitelist
  images: {
    // We only do it for production environment
    // This means images in dev environment can get super heavy
    // https://vercel.com/docs/image-optimization/managing-image-optimization-costs
    unoptimized: !(process.env.OPTIMIZE_IMAGES === 'TRUE'),
    domains: [
      'localhost',
      'vercel.app',
    ],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// Uncomment here if you want to enable the bundle analyzer and comment
// the other module.exports = nextConfig
// module.exports = withBundleAnalyzer({
//   poweredByHeader: false,
//   trailingSlash: true,
//   basePath: '',
//   // The starter code load resources from `public` folder with `router.basePath` in React components.
//   // So, the source code is "basePath-ready".
//   // You can remove `basePath` if you don't need it.
//   reactStrictMode: true,
// });

module.exports = nextConfig;
