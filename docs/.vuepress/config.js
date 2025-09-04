module.exports = {
  base: '/ui/',
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
        children: [
          { title: 'AppLayout', path: '/components/app-layout/' },
          { title: 'AppSwitcher', path: '/components/app-switcher/' },
          { title: 'BaseModal', path: '/components/base-modal/' },
          { title: 'SelectSwitcher', path: '/components/select-switcher/' },
          { title: 'ServersideCollection', path: '/components/serverside-data/' },
        ],
      },
    ],
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
}
