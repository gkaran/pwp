import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: all .5s;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid rgba(0,0,0,0);
  color: white;
  
  &:hover {
    background-color: black;
    background-color: #000;
    border: 1px solid rgba(0,0,0,.1);
    box-shadow: 0 0 20px 4px rgb(156, 156, 156);
    animation: jump .5s linear alternate infinite;
  }
  
  @keyframes jump {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15%); }
  }
`;


const GitHubIcon = ({github}) => (
  <Wrapper href={`https://github.com/${github}`} target={'_blank'}>
    <i className='fa fa-fw fa-2x fa-github'/>
  </Wrapper>
);

export default GitHubIcon;