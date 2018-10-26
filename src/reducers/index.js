import { combineReducers } from 'redux'
import superheroesReducer from './superheroesReducer'
import TabBarReducer from './TabBarReducer'

export default combineReducers({
    superheroes: superheroesReducer,
    TabBarId: TabBarReducer
})