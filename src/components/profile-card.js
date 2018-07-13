import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.brand};
  color: ${props => props.theme.brandInverse};
  border-radius: 2px;
  padding: 10px;
  text-align: center;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,.2);
`;

const ProfilePic = styled.img`
  margin-bottom: 0;
`;

const ShortDesc = styled.p`
  font-size: .8rem;
  line-height: 1rem;
`;

const ProfileCard = ({author}) => (
  <Container>
    <h3>About me</h3>
    <ProfilePic src='https://res.cloudinary.com/dzvutmr06/image/upload/c_fill,ar_1:1,g_auto,r_max,b_rgb:36373c/v1531310594/20171229_112320_e5f0zb.jpg' />
    {author && <ShortDesc>{author.shortDesc}</ShortDesc>}
  </Container>
)

export default ProfileCard