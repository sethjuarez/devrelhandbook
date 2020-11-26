module.exports = {
  title: 'DevRel Handbook',
  tagline: 'A concise and structured approach to Developer Relations',
  url: 'https://www.devrelhandbook.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sethjuarez',
  projectName: 'devrelhandbook',
  themeConfig: {
    navbar: {
      title: 'DevRel Handbook',
      logo: {
        alt: 'DevRel Handbook',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/sethjuarez/devrelhandbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Overview',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Business Purpose',
              to: 'docs/overview/reason',
            },
          ],
        },
        {
          title: 'What we do',
          items: [
            {
              label: 'Create Content',
              to: 'docs/content/intro',
            },
            {
              label: 'Refine Technology',
              to: 'docs/tech/intro',
            },
            {
              label: 'Grow Community',
              to: 'docs/community/intro',
            },
          ],
        },
        {
          title: 'Logistics',
          items: [
            {
              label: 'Measuring Success',
              to: 'docs/measurement/intro',
            },
            {
              label: 'Structuring the Team',
              to: 'docs/structure/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Seth Juarez, DevRel Handbook.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sethjuarez/devrelhandbook/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/sethjuarez/devrelhandbook/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
