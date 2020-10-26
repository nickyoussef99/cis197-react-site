import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './src/components/App'
import rootReducer from './src/reducers/index'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('react-root')
)