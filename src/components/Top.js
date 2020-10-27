import React from 'react'
import TopImage from './TopImage'
import TopForm from './TopForm'
import { connect } from 'react-redux'

const Top = ( { topFormVisible, url, text } ) => {
    return (
      <div>
        {(url !== "" || text !== "") &&
            <TopImage/>
        }
        {topFormVisible && 
          <TopForm oldUrl = {url} oldDesc = {text}/>
        }
      </div>
    )
}

const mapStateToProps = state => {
    const { topFormVisible, topImg, topDesc } = state.top
    return { 
        topFormVisible: topFormVisible,
        url: topImg,
        text: topDesc
    }
}
  
export default connect(mapStateToProps)(Top)