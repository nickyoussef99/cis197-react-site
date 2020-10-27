const initialState = {
    addFormVisible: false,
    editFormVisible: false,
    blogs: []
}

const blog = (state = initialState, action) => {
    const { type, id, url, title, text, visible, editId } = action
    switch (type) {
      case 'ADD_BLOG':
        return {
            ...state,
            blogs: [...state.blogs, { url, id, title, text }]
        }
      case 'TOGGLE_ADD_FORM':
          return {
              ...state,
              addFormVisible: visible
          }
      case 'TOGGLE_EDIT_FORM':
          return {
              ...state,
              editFormVisible: visible,
              editId: editId
          }
      case 'EDIT_BLOG':
          return {
              ...state,
              blogs: state.blogs.map(myBlog => 
                (myBlog.id === id)
              ? { url, id, title, text } 
              : myBlog)
          }
      case 'DELETE_BLOG':
          return {
            ...state,
            blogs: state.blogs.filter(b => b.id !== id)
          }
      default:
        return state
    }
  }
  
  export default blog