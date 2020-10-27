import React from 'react'
import styled from 'styled-components'
import EditBlogForm from './EditBlogForm'
import { toggleEditForm } from '../actions'
import { connect } from 'react-redux'

const Wrapper = styled.div`
  border:1px solid black;
  padding: 25px 12px 18px;
`;

const BlogItem = ( { url, id,  title, text, editId, editVisible, toggleForm } ) => {
    return (
        <Wrapper>
            <img 
                src={url} 
                height = "100px"/>
            <h2> Blog #{id}: { title } </h2>
            <h3> {text} </h3>
            <button onClick = {e => {
                e.preventDefault()
                toggleForm(true, id)
            }}>Edit Post</button>
            {editVisible && (id === editId) &&
                <EditBlogForm id={id} oldUrl = {url} oldText={text} oldTitle={title}/>
            }
        </Wrapper>
    )
}

const mapStateToProps = state => ({
    editId: state.blog.editId,
    editVisible: state.blog.editFormVisible
})

const mapDispatchToProps = dispatch => ({
    toggleForm: (visible, editId) => dispatch(toggleEditForm(visible, editId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogItem)