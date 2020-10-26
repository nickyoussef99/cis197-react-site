import React from 'react'
import { connect } from 'react-redux'

import { addBlog, toggleAddForm } from '../actions'

const AddBlogForm = ({ addBlog, toggleForm }) => {
  let title
  let url
  let text

  return (
    <div>
      <div>
          <h3>Add New Blog</h3>
      </div>
      <label>Title</label>
      <form>
        <input ref={node => title = node} />
      </form>
      <label>Image URL</label>
      <form>
        <input ref={node => url = node} />
      </form>
      <label>Description</label>
      <form>
        <input ref={node => text = node} />
      </form>
      <button className="btn btn-success" onClick = {e => {
          e.preventDefault()
          if (!title.value.trim() && !url.value.trim() && !text.value.trim()) {
            return
          }
          addBlog(url, title, text)
          //toggleForm()
      }}>Add</button>
      <button className="btn btn-info" onClick = {e => {
          e.preventDefault()
          //toggleForm()
      }}>Cancel</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addBlog: (url, title, text) => dispatch(addBlog(url, title, text)),
  toggleForm: () => dispatch(toggleAddForm())
})

export default connect(null, mapDispatchToProps)(AddBlogForm)