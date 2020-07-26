const { description } = require('../../package');

module.exports = {
  base: '/vue-form-json-schema/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'vue-form-json-schema',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#e7a000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/jarvelov/vue-form-json-schema',
    sidebarDepth: 2,
    editLinks: false,
    docsDir: 'docs',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/guide/',
      },
      {
        text: 'Examples',
        link: '/examples/',
      },
    ],
    sidebar: [
      {
        title: 'Docs',
        collapsable: false,
        children: [
          'guide/',
          {
            title: 'API',
            children: [
              'guide/components',
              'guide/options',
              'guide/schema',
              'guide/ui-schema',
            ],
          },
        ],
      },
      {
        title: 'Examples',
        children: ['examples/basic-input', 'examples/basic-value-prop', 'examples/basic-event-prop'],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
