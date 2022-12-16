import {
  GET_POKEMON_LIST_STARTED,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILED,
} from '../../constants'

import { initialState, HomeReducer } from '../HomeReducers'

describe('Home Reducers tests', () => {
  it('Should return newState when action type GET_POKEMON_LIST_STARTED', () => {
    const action = {
      type: GET_POKEMON_LIST_STARTED,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      pokemonListIsLoading: true,
    }
    expect(HomeReducer({}, action)).toEqual(expectedResult)
  })
  it('Should return newState when action type GET_POKEMON_LIST_SUCCESS', () => {
    const action = {
      type: GET_POKEMON_LIST_SUCCESS,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      pokemonList: action.payload,
      pokemonListSuccess: true,
      pokemonListIsLoading: false,
    }
    expect(HomeReducer({}, action)).toEqual(expectedResult)
  })
  it('Should return newState when action type GET_POKEMON_LIST_FAILED', () => {
    const action = {
      type: GET_POKEMON_LIST_FAILED,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      pokemonListFailed: true,
      pokemonListIsLoading: false,
      pokemonListError: action.payload,
    }
    expect(HomeReducer({}, action)).toEqual(expectedResult)
  })
})
