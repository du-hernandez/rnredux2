import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers' // /index
import thuks from 'redux-thunk'

export default configureStore = () => {
    // Esto nos permite devolver una función en nuestro action
    let store = createStore(reducers, applyMiddleware(thuks))
    return store
}