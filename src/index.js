import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './styles/index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducers from './reducers' //same thing as './reducers/index.js'

const store = createStore(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)