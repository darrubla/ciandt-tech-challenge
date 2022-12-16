/* eslint-disable default-param-last */
import {
  GET_POKEMON_LIST_STARTED,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILED,
} from '../constants'

const initialStateGetPokemonList = {
  pokemonList: [],
  pokemonListSuccess: false,
  pokemonListFailed: false,
  pokemonListIsLoading: false,
  pokemonListError: '',
}

export const initialState = {
  ...initialStateGetPokemonList,
}

const HomeReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_POKEMON_LIST_STARTED: {
      return {
        ...state,
        ...initialStateGetPokemonList,
        pokemonListIsLoading: true,
      }
    }
    case GET_POKEMON_LIST_SUCCESS: {
      return {
        ...state,
        ...initialStateGetPokemonList,
        pokemonList: payload,
        pokemonListSuccess: true,
        pokemonListIsLoading: false,
      }
    }
    case GET_POKEMON_LIST_FAILED: {
      return {
        ...state,
        ...initialStateGetPokemonList,
        pokemonListFailed: true,
        pokemonListIsLoading: false,
        pokemonListError: payload,
      }
    }
    default:
      return state
  }
}

export default HomeReducer