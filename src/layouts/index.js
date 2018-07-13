import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ProfileCard from '../components/profile-card'
import styled, { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import './index.css'
import 'font-awesome/css/font-awesome.min.css'
import Footer from '../components/footer'
import theme from '../config/theme'

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const BodyContainer = styled.div`
  display: flex;
`

const ChildrenContainer = styled.div`
  flex: 1 1 100%;
`

const ProfileCardContainer = styled.div`
  flex: 0 0 200px;
`

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <BodyContainer>
          <ChildrenContainer>{children()}</ChildrenContainer>
          <ProfileCardContainer>
            <ProfileCard author={data.site.siteMetadata.author} />
          </ProfileCardContainer>
        </BodyContainer>
        <Footer
          github={data.site.siteMetadata.author.mediaLinks.github}
          linkedIn={data.site.siteMetadata.author.mediaLinks.linkedIn}
        />
      </Container>
    </div>
  </ThemeProvider>
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
          mediaLinks {
            github,
            linkedIn
          }
        }
      }
    }
  }
`
