// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '德玛西亚',
  siteDescription:'在那里哟',
  plugins: [],
  pathPrefix:'gridsome',
  trailingSlash:false,
  templates:{
    Post:[
      {
        path:'/posts/:id',
        component:'./src/templates/Post.vue'
      }
    ]
  }
}
