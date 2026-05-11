// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "WHISKERS ENTERTAINMENT",
  tagline: "indie studio made by 2 brothers with cat names",
  favicon: "img/favicon.ico",
  plugins: [
    "docusaurus-plugin-sass",
    "docusaurus-plugin-image-zoom",
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "unreal", // Required: must be unique
        path: "unreal", // Folder on your computer
        routeBasePath: "unreal", // URL route (e.g., ://mysite.com)
        sidebarPath: "./sidebars.js",
      },
    ],
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://ra9dev.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/gaming/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ra9dev", // Usually your GitHub org/user name.
  projectName: "gaming", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "3d",
          routeBasePath: "3d",
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "WE",
        logo: {
          alt: "Gaming",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "3d",
            label: "101 LVL of 3D",
          },
          {
            type: "docSidebar",
            sidebarId: "unreal",
            docsPluginId: "unreal",
            label: "UNREAL EVO",
            link: {
              type: "generated-index",
            },
          },
          { to: "/blog", label: "STUDIO" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Contacts",
            items: [
              {
                label: "Steam",
                to: "https://steamcommunity.com/id/TigerWhiskers",
              },
              {
                label: "Email",
                to: "mailto:ra9dev@gmail.com",
              },
            ],
          },
          {
            title: "Portfolio",
            items: [
              {
                label: "itch.io",
                href: "https://ra9dev.itch.io",
              },
            ],
          },
          {
            title: "Grand Scheme",
            items: [
              {
                label: "Secrets",
                to: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Whiskers Entertainment, Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        },
      },
    }),
};

export default config;
