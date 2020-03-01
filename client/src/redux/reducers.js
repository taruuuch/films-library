import { combineReducers } from 'redux'
import { filmsReducer } from './films/reducer'
import { messageReducer } from './message/reducer'

export default combineReducers({
    films: filmsReducer,
    message: messageReducer
})
