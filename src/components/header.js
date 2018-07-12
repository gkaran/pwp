import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const Container = styled.div`
  background-color: #36373c;
  margin-bottom: 1.45rem;
`;

const SpacingWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const PageTitle = styled.h1`
  margin: 0;
`;

const PageTitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Container>
    <SpacingWrapper>
      <PageTitle>
        <PageTitleLink to="/">
          {siteTitle}
        </PageTitleLink>
      </PageTitle>
    </SpacingWrapper>
  </Container>
)

export default Header
