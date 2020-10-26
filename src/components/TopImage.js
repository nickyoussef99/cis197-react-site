import React from "react";
import { connect } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-left: 'auto';
  margin-right: 'auto';
  text-align: "center";
`;

const IMG = styled.img`
  margin-left: auto;
  margin-right:auto;
`;

const TopImage = ({ topImg, topDesc }) => {
  return (
  <Wrapper>
    <IMG
      className="img-fluid"
      src= { topImg }
      height="200px"
    />
    <h3>{topDesc}</h3>
  </Wrapper>
  )
}

const mapStateToProps = state => {
  let { topImg, topDesc } = state
  console.log(`IMG: ${topImg}, Desc: ${topDesc}`)
  console.log(`State: ${state}, ${state.topDesc}`)
  return { topImg: topImg, topDesc: topDesc}
}

export default connect(mapStateToProps)(TopImage)
