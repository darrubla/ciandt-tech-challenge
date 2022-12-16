import axios from 'axios'
import {
  handleActionCatch,
  validateServerResponse,
} from '../../utils/errorUtils'
import {
  FILTER_STARTED,
  FILTER_SUCCESS,
  FILTER_FAILED,
  CLEAR_FILTER,
} from '../constants'

export const FilterPokemonStarted = () => ({
  type: FILTER_STARTED,
})

export const FilterPokemonSuccess = (payload) => ({
  type: FILTER_SUCCESS,
  payload,
})

export const FilterPokemonFailed = (payload) => ({
  type: FILTER_FAILED,
  payload,
})

export const ClearFilter = () => ({ type: CLEAR_FILTER })

const FilterPokemon = (url) => async (dispatch) => {
  dispatch(FilterPokemonStarted())
  try {
    const result = await axios({
      method: 'GET',
      url
    })
    validateServerResponse(result)
    dispatch(FilterPokemonSuccess(result.data))
  } catch (error) {
    handleActionCatch(error, dispatch, FilterPokemonFailed, 'Filter Pokemon')
  }
}

export default FilterPokemon
