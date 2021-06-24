import allReducers from '../reducers/index.js'
import {applyMiddleware, createStore} from "redux"
import {compose} from "redux"
import thunk from "redux-thunk"
//compose to join middleware

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));


export default store