import React from "react"
import BlogHeader from "./BlogHeader"
import BlogList from './BlogList'
import AddBlogForm from './AddBlogForm'
import { connect } from 'react-redux'

const Blog = ( { addFormVisible } ) => {
    return (
      <div>
        <BlogHeader/>
        { addFormVisible ? <AddBlogForm/> : null }
        <AddBlogForm/>
        <BlogList/>
      </div>
    )
}

const mapStateToProps = state => {
    const { addFormVisible } = state
    return { addFormVisible: addFormVisible }
}
  
  
export default connect(mapStateToProps, null)(Blog)