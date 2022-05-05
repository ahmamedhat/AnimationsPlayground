import { combineReducers, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import theme from './reducers/theme'


const rootReducer = combineReducers({
    theme
})


const store = configureStore({ reducer: rootReducer })

// const store = createStore(rootReducer)


export default store