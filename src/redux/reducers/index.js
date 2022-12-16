import { combineReducers } from 'redux'

import Filter from './FilterReducers'
import Home from './HomeReducers'

export default combineReducers({
  Filter,
  Home,
})
