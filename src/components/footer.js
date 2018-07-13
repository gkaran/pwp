import React from 'react'
import styled from 'styled-components'
import SocialIcon from './social-icon'

const Container = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: ${props => props.theme.brand};
  border-radius: 2px;
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

const Footer = ({mediaLinks}) => (
  <Container>
    <SocialIcons>
      {mediaLinks.map(({icon, name, url}) => <SocialIcon icon={icon} name={name} url={url} />)}
    </SocialIcons>
  </Container>
)

Footer.defaultProps = {
  mediaLinks: []
}

export default Footer;