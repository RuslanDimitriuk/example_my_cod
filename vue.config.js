// vue.config.js

module.exports = {
  // proxy API requests to Valet during development
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT,
    disableHostCheck: true,
    proxy: process.env.BASE_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Authorization',
    },
  },


  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: './dist',
  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  pwa: {},

}
