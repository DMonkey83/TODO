import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import tasks from './reducers'
import './index.css'
import * as serviceWorker from './serviceWorker'

const store = createStore(tasks, devToolsEnhancer())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
