import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Geodesix Docs',
  tagline: 'Developer documentation for Geodesix integration tools',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.geodesix.com',
  baseUrl: '/',

  organizationName: 'geodesix',
  projectName: 'geodesix-docs',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          routeBasePath: 'docs',
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
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Geodesix Docs',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'phpSdkSidebar',
            position: 'left',
            label: 'PHP SDK',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pythonSdkSidebar',
            position: 'left',
            label: 'Python SDK',
          },
          {
            type: 'docSidebar',
            sidebarId: 'wordpressPluginSidebar',
            position: 'left',
            label: 'WordPress Plugin',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'PHP SDK',
                to: '/docs/php-sdk/',
              },
              {
                label: 'Python SDK',
                to: '/docs/python-sdk/',
              },
              {
                label: 'WordPress Plugin',
                to: '/docs/wordpress-plugin/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Geodesix',
                href: 'https://geodesix.com',
              },
            ],
          },
        ],
        copyright: `Copyright \u00A9 ${new Date().getFullYear()} Geodesix. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php', 'python', 'bash'],
      },
    }),
};

export default config;
