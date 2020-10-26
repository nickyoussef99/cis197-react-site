import React from "react";
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

const Header = () => {
  return(
  <Wrapper>
    <Title>Welcome to my website! </Title>
  </Wrapper>
  )
}

export default Header