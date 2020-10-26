import React from 'react'
import { connect } from 'react-redux'
import { toggleAddForm } from '../actions'

import styled from 'styled-components'

const Title = styled.h1`
  color: #6495ED;
  font-weight: 300;
`;

const AddButton = styled.button`
  background: #FAFAD2;
  margin-left: auto;
  font-weight: 250;
`;

const Wrapper = styled.div`
  display: 'flex';
`;

const BlogHeader = ( { toggleForm } ) => {
  return (
    <Wrapper>
        <Title>
            Blog Posts
        </Title>
        <AddButton onClick = {e => {
          e.preventDefault()
          toggleAddForm()
      }}> Add Post</AddButton>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
    toggleAddForm: () => dispatch(toggleAddForm())
})
  
export default connect(null, mapDispatchToProps)(BlogHeader)
