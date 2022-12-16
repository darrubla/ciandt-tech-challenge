import {
  GET_DETAILS_STARTED,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILED,
  GET_ENTRY_STARTED,
  GET_ENTRY_SUCCESS,
  GET_ENTRY_FAILED,
} from '../../constants'

import { initialState, DetailReducer } from '../DetailReducers'

describe('Detail Reducers tests', () => {
  it('Should return newState when action type GET_DETAILS_STARTED', () => {
    const action = {
      type: GET_DETAILS_STARTED,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      pokemonDetailsIsLoading: true,
    }
    expect(DetailReducer(initialState, action)).toEqual(expectedResult)
  })
  it('Should return newState when action type GET_DETAILS_SUCCESS', () => {
    const action = {
      type: GET_DETAILS_SUCCESS,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      pokemonDetails: action.payload,
      pokemonDetailsSuccess: true,
      pokemonDetailsIsLoading: false,
    }
    expect(DetailReducer(initialState, action)).toEqual(expectedResult)
  })
  it('Should return newState when action type GET_DETAILS_FAILED', () => {
    const action = {
      type: GET_DETAILS_FAILED,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      pokemonDetailsFailed: true,
      pokemonDetailsIsLoading: false,
      pokemonDetailsError: action.payload,
    }
    expect(DetailReducer(initialState, action)).toEqual(expectedResult)
  })
  it('Should return newState when action type GET_ENTRY_STARTED', () => {
    const action = {
      type: GET_ENTRY_STARTED,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      pokemonEntryIsLoading: true,
    }
    expect(DetailReducer(initialState, action)).toEqual(expectedResult)
  })
  it('Should return newState when action type GET_ENTRY_SUCCESS', () => {
    const action = {
      type: GET_ENTRY_SUCCESS,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      pokemonEntry: action.payload,
      pokemonEntrySuccess: true,
      pokemonEntryIsLoading: false,
    }
    expect(DetailReducer(initialState, action)).toEqual(expectedResult)
  })
  it('Should return newState when action type GET_ENTRY_FAILED', () => {
    const action = {
      type: GET_ENTRY_FAILED,
      payload: {},
    }
    const expectedResult = {
      ...initialState,
      pokemonEntryFailed: true,
      pokemonEntryIsLoading: false,
      pokemonEntryError: action.payload,
    }
    expect(DetailReducer(initialState, action)).toEqual(expectedResult)
  })
})
