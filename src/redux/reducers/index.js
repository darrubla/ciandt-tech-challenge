import { combineReducers } from 'redux'

import Filter from './FilterReducers'
import Home from './HomeReducers'
import Detail from './DetailReducers'
import Auth from './AuthReducers'

export default combineReducers({
  Filter,
  Home,
  Detail,
  Auth,
})
