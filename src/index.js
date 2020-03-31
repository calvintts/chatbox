import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import App from './components/App'
import thunk from 'redux-thunk'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEV_TOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers
    ,composeEnhancers(applyMiddleware(thunk))
)


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root"))
