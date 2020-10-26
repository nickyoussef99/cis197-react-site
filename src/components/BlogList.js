import React from "react"
import BlogItem from './BlogItem'

import { connect } from 'react-redux'

const BlogList = ( { blogs } ) => {
    return (
        <div> 
            {blogs.map(blog =>
                <BlogItem
                key={blog.id}
                {...blog}
            />
            )}
        </div>
    )
}

const mapStateToProps = state => {
    const { blogs } = state
    return {blogs: blogs}
}
  
  
  export default connect(mapStateToProps)(BlogList)