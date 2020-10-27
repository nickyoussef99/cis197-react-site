import React from "react";
import styled from 'styled-components'
import { connect } from 'react-redux'
import { toggleTopForm } from '../actions'

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

const Header = ({ toggleForm }) => {
  return(
  <Wrapper>
    <Title>Welcome to my website! </Title>
    <button onClick = {e => {
          e.preventDefault()
          toggleForm(true)
      }}>Edit Intro</button>
  </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleForm: visible => dispatch(toggleTopForm(visible))
})

export default connect(null, mapDispatchToProps)(Header)