// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Genie's Dev Blog",
  tagline: '어제보다 나은 오늘이 되기 위해 기록하는 블로그',
  url: 'https://uhgenie7.github.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uhgenie7', // Usually your GitHub org/user name.
  projectName: 'uhgenie7.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/uhgenie7/uhgenie7.github.io/edit/main/',
        },
        blog: {
          blogSidebarTitle: '최근 포스트',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/uhgenie7/uhgenie7.github.io/edit/main/',
          postsPerPage: 'ALL',
          path: 'blog',
          id: 'blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'G-0M1NXJEK07',
        },
        gtag: {
          trackingID: 'G-0M1NXJEK07',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: '지니, genie, 기술블로그, 프론트엔드, 개발',
        },
      ],
      navbar: {
        title: "Genie's Dev Blog",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/docs/dev/', label: '개발', position: 'left' },
          { to: '/fixed', label: '에러해결', position: 'left' },
          { to: '/blog', label: '기록', position: 'left' },
          { to: '/docs/books/', label: '책', position: 'left' },
          { to: 'blog/archive', label: '블로그 아카이브', position: 'left' },
          {
            href: 'https://github.com/uhgenie7/uhgenie7.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '개발',
                to: '/docs/dev/',
              },
              {
                label: '책',
                to: '/docs/books/',
              },
              {
                label: '에러해결',
                to: '/fixed',
              },
              {
                label: '기록',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Old Tistory Blog',
                href: 'https://jineecode.tistory.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/uhgenie7/uhgenie7.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Genie's Dev Blog, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php'],
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      algolia: {
        apiKey: 'a1a5ad97837eae7959cfe288db85cdcb',
        indexName: 'uhgenie7',
        appId: 'HOBLW4XRQQ',
        contextualSearch: false,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'fixed',
        routeBasePath: 'fixed',
        path: 'fixed',
        blogTitle: '에러 해결',
        blogSidebarTitle: '최근 포스트',
        blogDescription: '에러 해결 기록',
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
};

module.exports = config;
