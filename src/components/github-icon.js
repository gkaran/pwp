import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  border-radius: 50%;
  background-color: #FEFEFE;
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 2px 2px rgba(0,0,0,.2);
  transition: all .5s;
  width: 30px;
  height: 30px;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  text-decoration: none;
  
  &:hover {
    background-color: black;
    color: white;
  }
`;

const GitHubIcon = ({github}) => (<Wrapper href={`https://github.com/${github}`} target={'_blank'}>G</Wrapper>);

export default GitHubIcon;