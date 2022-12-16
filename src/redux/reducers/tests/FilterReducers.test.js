import {
  FILTER_STARTED,
  FILTER_SUCCESS,
  FILTER_FAILED,
  CLEAR_FILTER,
} from '../../constants'

import { initialState, FilterPokemonReducer } from '../FilterReducers'

describe('Filter Reducers tests', () => {
  it('Should return newState when action type FILTER_STARTED', () => {
    const action = {
      type: FILTER_STARTED,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      filterPokemonIsLoading: true,
    }
    expect(FilterPokemonReducer({}, action)).toEqual(expectedResult)
  });
  it('Should return newState when action type FILTER_SUCCESS', () => {
    const action = {
      type: FILTER_SUCCESS,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      filterPokemon: action.payload,
      filterPokemonSuccess: true,
      filterPokemonIsLoading: false,
    }
    expect(FilterPokemonReducer({}, action)).toEqual(expectedResult)
  });
  it('Should return newState when action type FILTER_FAILED', () => {
    const action = {
      type: FILTER_FAILED,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      filterPokemonFailed: true,
      filterPokemonIsLoading: false,
      filterPokemonError: action.payload,
    }
    expect(FilterPokemonReducer({}, action)).toEqual(expectedResult)
  });
  it('Should return newState when action type CLEAR_FILTER', () => {
    const action = {
      type: CLEAR_FILTER,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
    }
    expect(FilterPokemonReducer({}, action)).toEqual(expectedResult)
  });
});