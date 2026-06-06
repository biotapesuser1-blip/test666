// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

// Auto-derived from GitHub Actions env vars so any fork Just Works:
//   GITHUB_REPOSITORY        = "<owner>/<repo>"
//   GITHUB_REPOSITORY_OWNER  = "<owner>"
//
// If you wire up a custom domain, set `url` to that domain and
// `baseUrl` to "/". For local dev (`npm start`) neither variable is
// set so we fall back to plain defaults.

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'docs';
const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'user';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Docs',
  tagline: 'Documentation, edited with AI',
  favicon: 'img/favicon.ico',

  url: `https://${owner}.github.io`,
  baseUrl: `/${repo}/`,

  organizationName: owner,
  projectName: repo,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Docs',
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} My Docs`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
