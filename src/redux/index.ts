import { legacy_createStore as createStore, combineReducers  } from 'redux'
import Products from './Products/Products.reducer'

const reducers = combineReducers({
  products: Products
})

const store = createStore(reducers)

export default store

