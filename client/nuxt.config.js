module.exports = {
  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' }
    ],
    link: []
  },
  loading: false,
  modules: [
    '@nuxtjs/axios',
    'nuxt-sass-resources-loader'
  ],
  axios: {
    baseURL: 'http://localhost:3030/api'
  },
  sassResources: [
    '@assets/scss/reset.scss',
    '@assets/scss/fonts.scss',
    '@assets/scss/vars.scss',
    '@assets/scss/mixins.scss',
    '@assets/scss/transitions.scss',
    '@assets/scss/main.scss'
  ],
  plugins: [
    '~/plugins/axios.js'
  ],
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        // eslint loader
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // babel polyfill
        config.entry.vendor.push('babel-polyfill')
      }
      // svg loader
      const urlLoader = config.module.rules.find(rule => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [{ removeDoctype: true }, { removeComments: true }]
          }
        }
      })
    }
  }
}
