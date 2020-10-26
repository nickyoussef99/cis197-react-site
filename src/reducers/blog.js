const initialState = {
    addFormVisible: false,
    blogs: []
}

const blog = (state = initialState, action) => {
    const { type, id, url, title, text } = action
  
    switch (type) {
      case 'ADD_BLOG':
        return {
            ...state,
            blogs: [...blogs, { url, id, title, text }]
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