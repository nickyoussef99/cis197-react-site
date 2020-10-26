import React from 'react'
import styled from 'styled-components'

const BlogItem = ( { blogImg, id,  title, text} ) => {
    return (
        <div>
            <img 
                src={blogImg} 
                height = "100px"/>
            <h2> Blog #{id}: { title } </h2>
            <p> {text} </p>
        </div>
    )
}

export default BlogItem