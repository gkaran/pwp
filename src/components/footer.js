import React from 'react'
import styled from 'styled-components'
import GitHubIcon from './github-icon'
import LinkedInIcon from './linked-in-icon'

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
  justify-content: center;
  align-content: center;
  
  * + * {
    margin-left: 10px;
  }
`;

const Footer = ({github, linkedIn}) => (
  <Container>
    <SocialIcons>
      {github && <GitHubIcon github={github}/>}
      {linkedIn && <LinkedInIcon linkedIn={linkedIn}/>}
    </SocialIcons>
  </Container>
)

export default Footer;