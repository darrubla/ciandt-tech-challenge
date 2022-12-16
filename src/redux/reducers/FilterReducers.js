/* eslint-disable default-param-last */
import {
  FILTER_STARTED,
  FILTER_SUCCESS,
  FILTER_FAILED,
  CLEAR_FILTER,
} from '../constants'

const initialStateFilter = {
  filterPokemon: {},
  filterPokemonSuccess: false,
  filterPokemonFailed: false,
  filterPokemonIsLoading: false,
  filterPokemonError: '',
}

export const initialState = {
  ...initialStateFilter,
}

const FilterPokemonReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FILTER_STARTED: {
      return {
        ...state,
        ...initialStateFilter,
        filterPokemonIsLoading: true,
      }
    }
    case FILTER_SUCCESS: {
      return {
        ...state,
        ...initialStateFilter,
        filterPokemon: payload,
        filterPokemonSuccess: true,
        filterPokemonIsLoading: false,
      }
    }
    case FILTER_FAILED: {
      return {
        ...state,
        ...initialStateFilter,
        filterPokemonFailed: true,
        filterPokemonIsLoading: false,
        filterPokemonError: payload,
      }
    }
    case CLEAR_FILTER: {
      return {
        ...state,
        ...initialStateFilter,
      }
    }
    default:
      return state
  }
}

export default FilterPokemonReducer