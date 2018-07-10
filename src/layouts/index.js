import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ProfileCard from '../components/profile-card';

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        display: 'flex'
      }}
    >
      <div style={{flex: '1 1 100%'}}>
      {children()}
      </div>
      <div style={{ flex: '0 0 180px' }}>
        <ProfileCard author={data.site.siteMetadata.author}/>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        author {
          name
          shortDesc
        }
      }
    }
  }
`
