/* eslint-disable default-param-last */
import {
  GET_DETAILS_STARTED,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILED,
  GET_ENTRY_STARTED,
  GET_ENTRY_SUCCESS,
  GET_ENTRY_FAILED,
} from '../constants'

const initialStatePokemonDetails = {
  pokemonDetails: {},
  pokemonDetailsSuccess: false,
  pokemonDetailsFailed: false,
  pokemonDetailsIsLoading: false,
  pokemonDetailsError: '',
}

const initialStatepokemonEntry = {
  pokemonEntry: {},
  pokemonEntrySuccess: false,
  pokemonEntryFailed: false,
  pokemonEntryIsLoading: false,
  pokemonEntryError: '',
}

export const initialState = {
  ...initialStatePokemonDetails,
  ...initialStatepokemonEntry,
}

const DetailReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_DETAILS_STARTED: {
      return {
        ...state,
        ...initialStatePokemonDetails,
        pokemonDetailsIsLoading: true,
      }
    }
    case GET_DETAILS_SUCCESS: {
      return {
        ...state,
        ...initialStatePokemonDetails,
        pokemonDetails: payload,
        pokemonDetailsSuccess: true,
        pokemonDetailsIsLoading: false,
      }
    }
    case GET_DETAILS_FAILED: {
      return {
        ...state,
        ...initialStatePokemonDetails,
        pokemonDetailsFailed: true,
        pokemonDetailsIsLoading: false,
        pokemonDetailsError: payload,
      }
    }
    case GET_ENTRY_STARTED: {
      return {
        ...state,
        ...initialStatepokemonEntry,
        pokemonEntryIsLoading: true,
      }
    }
    case GET_ENTRY_SUCCESS: {
      return {
        ...state,
        ...initialStatepokemonEntry,
        pokemonEntry: payload,
        pokemonEntrySuccess: true,
        pokemonEntryIsLoading: false,
      }
    }
    case GET_ENTRY_FAILED: {
      return {
        ...state,
        ...initialStatepokemonEntry,
        pokemonEntryFailed: true,
        pokemonEntryIsLoading: false,
        pokemonEntryError: payload,
      }
    }
    default:
      return state
  }
}

export default DetailReducer