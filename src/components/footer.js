import React from 'react'
import styled from 'styled-components'
import GitHubIcon from './github-icon'

const Container = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #EFEFEF;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 2px 2px rgba(0,0,0,.2); 
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SocialIcon = styled.div`
`

const Footer = ({github}) => (
  <Container>
    <SocialIcons>
      {github && <GitHubIcon github={github}/>}
    </SocialIcons>
  </Container>
)

export default Footer;