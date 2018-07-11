const authorName = 'George Karanikas';

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    author: {
      name: authorName,
      shortDesc: `Hi, my name is ${authorName} and I'm a huge pile of crap`,
      mediaLinks: {
        facebook: '',
        github: 'gkaran',
        twitter: '',
        linkedIn: ''
      }
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ],
}
