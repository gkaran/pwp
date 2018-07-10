const authorName = 'George Karanikas';

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    author: {
      name: authorName,
      shortDesc: `Hi, my name is ${authorName} and I'm a huge pile of crap`
    }
  },
  plugins: ['gatsby-plugin-react-helmet'],
}
