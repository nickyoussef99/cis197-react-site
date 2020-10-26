import React from 'react'
import { connect } from 'react-redux'

import { setTopDesc, setTopImage } from '../actions'

const TopForm = ({ setTopDesc, setTopImage }) => {
  let inputDesc
  let inputImg

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputImg.value.trim()) {
          return
        }
        setTopImage(inputImg.value)
        inputImg.value = ''
      }}>
        <input ref={node => inputImg = node} />
        <button type="submit">
          Add ImageUrl
        </button>
      </form>
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputDesc.value.trim()) {
          return
        }
        setTopDesc(inputDesc.value)
        inputDesc.value = ''
      }}>
        <input ref={node => inputDesc = node} />
        <button type="submit">
          Add Image Description
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setTopImage: text => dispatch(setTopImage(text)),
  setTopDesc: text => dispatch(setTopDesc(text))
})

export default connect(null, mapDispatchToProps)(TopForm)