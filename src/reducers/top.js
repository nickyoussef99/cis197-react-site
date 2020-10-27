const initialState = {
  topFormVisible: false,
  topDesc: "",
  topImg: ""
}
const top = (state = {}, action) => {
    const { type, text, visible } = action 
    switch (type) {
      case 'SET_TOP_DESC':
        return {
            ...state,
          topDesc: text
        }
      case 'TOGGLE_TOP_FORM':
        return {
          ...state,
          topFormVisible: visible
        }
      case 'SET_TOP_IMG':
        return {
            ...state,
            topImg: text
        }
      default:
        return state
    }
  }
  
  export default top