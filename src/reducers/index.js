import { combineReducers } from 'redux'

import top from "./top"
import blog from './blog'

const rootReducer = combineReducers ({top, blog})

export default rootReducer
//export default top
//export default blog

