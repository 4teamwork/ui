module.exports = {
  base: '/ftw-ui/',
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      {
        title: 'Getting Started',
        path: '/',
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Changelog',
        path: '/changelog/',
        collapsable: false,
        sidebarDepth: 0,
      },
      {
        title: 'Components',
        sidebarDepth: 1,
        children: [{ title: 'AppLayout', path: '/components/app-layout/' }],
      },
    ],
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
}