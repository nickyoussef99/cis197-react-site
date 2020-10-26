const top = (state = initialState, action) => {
    const { type, text } = action 
    console.log(state)
    switch (type) {
      case 'SET_TOP_DESC':
        return {
            ...state,
          topDesc: text
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