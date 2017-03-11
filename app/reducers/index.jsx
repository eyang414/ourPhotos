import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  photos: require('./photos').default
})

export default rootReducer
