import React from "react"
import BlogHeader from "./BlogHeader"
import BlogList from './BlogList'
import AddBlogForm from './AddBlogForm'
import { connect } from 'react-redux'
import BlogItem from "./BlogItem"

const Blog = ( { addFormVisible } ) => {
    return (
      <div>
        <BlogHeader/>
        { addFormVisible ? <AddBlogForm/> : null }
        <AddBlogForm/>
        <BlogList/>
        <BlogItem url="data:image/jpeg;base64,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" id= {4} title= "Hello" text= "testing"/>
      </div>
    )
}

const mapStateToProps = state => {
    const { addFormVisible } = state.blog
    return { addFormVisible: addFormVisible }
}
  
  
export default connect(mapStateToProps, null)(Blog)