import { combineReducers } from 'redux'
import { filmReducer } from './film/reducers'
import { filmsReducer } from './films/reducers'
import { errorReducer } from './error/reducers'

export default combineReducers({
    film: filmReducer,
    films: filmsReducer,
    error: errorReducer
})
