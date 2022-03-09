import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import todoReducer from './todoReducer'




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// set up store, import provider to use redux
export default createStore(todoReducer, composeEnhancers(applyMiddleware(thunk)))
