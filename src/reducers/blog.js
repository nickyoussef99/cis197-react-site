const initialState = {
    addFormVisible: false,
    blogs: []
}

const blog = (state = initialState, action) => {
    const { type, id, url, title, text } = action
    console.log(state.blogs)
    console.log("in the blog reducer")
    switch (type) {
      case 'ADD_BLOG':
        return {
            ...state,
            blogs: [...state.blogs, { url, id, title, text }]
        }
      case 'TOGGLE_ADD_FORM':
          return {
              ...state,
              addFormVisible: !state.addFormVisible
          }
      default:
        return state
    }
  }
  
  export default blog