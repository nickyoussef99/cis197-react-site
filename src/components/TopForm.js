import React from 'react'
import { connect } from 'react-redux'

import { setTopDesc, setTopImage, toggleTopForm } from '../actions'

const TopForm = ({ setTopDesc, setTopImage, toggleForm, oldUrl, oldDesc }) => {
  let url
  let text

  return (
    <div>
      <div>
          <h3>Edit Intro</h3>
      </div>
      <label>Image Url</label>
      <form>
        <input defaultValue = { oldUrl } ref={node => url = node} />
      </form>
      <label>Description</label>
      <form>
        <input defaultValue = { oldDesc } ref={node => text = node} />
      </form>
      <button onClick = {e => {
          e.preventDefault()
          setTopImage(url.value.trim())
          setTopDesc(text.value.trim())
          toggleForm(false)
      }}>Save</button>
      <button onClick = {e => {
          e.preventDefault()
          toggleForm(false)
      }}>Cancel</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setTopImage: text => dispatch(setTopImage(text)),
  setTopDesc: text => dispatch(setTopDesc(text)),
  toggleForm: visible => dispatch(toggleTopForm(visible))
})

export default connect(null, mapDispatchToProps)(TopForm)