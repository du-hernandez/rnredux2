import { combineReducers } from 'redux'
import superheroesReducer from './superheroesReducer'
import TabBarReducer from './TabBarReducer'
import dataReducer from './dataReducer'

export default combineReducers({
    superheroes: superheroesReducer,
    TabBarId: TabBarReducer,
    dataReducer
})