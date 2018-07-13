const authorName = 'George Karanikas'

module.exports = {
  siteMetadata: {
    title: authorName,
    author: {
      name: authorName,
      shortDesc: `Hi, my name is ${authorName} and I'm a huge pile of crap`
    },
    mediaLinks: [{
      name: 'github',
      icon: 'fa-github',
      url: 'https://github.com/gkaran',
    }, {
      name: 'linkedin',
      icon: 'fa-linkedin',
      url: 'https://linkedin.com/in/gkaran',
    }, {
      name: 'twitter',
      icon: 'fa-twitter',
      url: 'https://twitter.com/gkaranikas'
    }, {
      name: 'facebook',
      icon: 'fa-facebook',
      url: 'https://www.facebook.com/George.Karanikas'
    }]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
}