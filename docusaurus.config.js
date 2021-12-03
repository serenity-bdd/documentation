// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Serenity BDD Users Manual',
  tagline: 'Automated Acceptance Testing With Style',
  url: 'https://www.serenity-bdd.info',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'serenity-bdd', // Usually your GitHub org/user name.
  projectName: 'serenity-core', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/serenity-core/serenity-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://johnfergusonsmart.com/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Serenity BDD Logo',
          src: 'img/serenity-bdd-small.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'first_test',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'doc',
            docId: 'guide/user_guide_intro',
            position: 'left',
            label: 'User Manual',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: 'http://www.johnfergusonsmart.com/support',
            label: 'Get Support',
            position: 'right',
          },
          {
            href: 'http://expansion.serenity-dojo.com',
            label: 'Learn Serenity BDD Online',
            position: 'right',
          },
          {
            href: 'http://expansion.serenity-dojo.com',
            label: 'Serenity BDD Coaching',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/first_test',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Gitter',
                href: 'https://gitter.im/serenity-bdd/serenity-core',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/serenity-bdd',
              }
            ],
          },
          {
            title: 'Learn Serenity BDD',
            items: [
              {
                label: 'The Serenity Dojo Training Library',
                href: 'http://expansion.serenity-dojo.com',
              },
              {
                label: 'Personalised Serenity BDD Coaching',
                href: 'https://www.serenity-dojo.com/apply',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/serenity-bdd/serenity-core',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Serenity Dojo Ltd.`,
      },
      prism: {
        additionalLanguages: ['java', 'scala'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
