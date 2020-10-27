import React from 'react'
import { connect } from 'react-redux'

import { editBlog, deleteBlog, toggleEditForm } from '../actions'

const EditBlogForm = ({ editBlog, deleteBlog, toggleForm, id, oldUrl, oldTitle, oldText }) => {
  let title
  let url
  let text

  return (
    <div>
      <div>
          <h3>Edit Blog #{id}</h3>
      </div>
      <label>Title</label>
      <form>
        <input defaultValue = { oldTitle } ref={node => title = node} />
      </form>
      <label>Image URL</label>
      <form>
        <input defaultValue = { oldUrl } ref={node => url = node} />
      </form>
      <label>Description</label>
      <form>
        <input defaultValue = { oldText } ref={node => text = node} />
      </form>
      <button onClick = {e => {
          e.preventDefault()
          if (!title.value.trim() && !url.value.trim() && !text.value.trim()) {
            return
          }
          editBlog(id, url.value, title.value, text.value)
          toggleForm(false, id)
      }}>Save</button>
      <button onClick = {e => {
          e.preventDefault()
          toggleForm(false, id)
      }}>Cancel</button>
      <button onClick = {e => {
          e.preventDefault()
          deleteBlog(id)
          toggleForm(false, id)
      }}>Delete Blog</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  editBlog: (id, url, title, text) => dispatch(editBlog(id, url, title, text)),
  deleteBlog: id => dispatch(deleteBlog(id)),
  toggleForm: (visible, editId) => dispatch(toggleEditForm(visible, editId))
})

export default connect(null, mapDispatchToProps)(EditBlogForm)