import {
  GET_DETAILS_STARTED,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILED,
  GET_ENTRY_STARTED,
  GET_ENTRY_SUCCESS,
  GET_ENTRY_FAILED,
  CLEAR_POKEMON_DETAILS,
} from '../../constants'

import {
  GetPokemonDetailsStarted,
  GetPokemonDetailsSuccess,
  GetPokemonDetailsFailed,
  GetPokemonEntryStarted,
  GetPokemonEntrySuccess,
  GetPokemonEntryFailed,
  ClearPokemonDetails
} from '../DetailActions'

describe('Detail actions type test', () => {
  it('dispatch action when action type GET_DETAILS_STARTED', () => {
    const expectedAction = {
      type: GET_DETAILS_STARTED,
    }
    expect(GetPokemonDetailsStarted()).toEqual(expectedAction)
  })
  it('dispatch action when action type GET_DETAILS_SUCCESS', () => {
    const expectedAction = {
      type: GET_DETAILS_SUCCESS,
    }
    expect(GetPokemonDetailsSuccess()).toEqual(expectedAction)
  })
  it('dispatch action when action type GET_DETAILS_FAILED', () => {
    const expectedAction = {
      type: GET_DETAILS_FAILED,
    }
    expect(GetPokemonDetailsFailed()).toEqual(expectedAction)
  })
  it('dispatch action when action type GET_ENTRY_STARTED', () => {
    const expectedAction = {
      type: GET_ENTRY_STARTED,
    }
    expect(GetPokemonEntryStarted()).toEqual(expectedAction)
  })
  it('dispatch action when action type GET_ENTRY_SUCCESS', () => {
    const expectedAction = {
      type: GET_ENTRY_SUCCESS,
    }
    expect(GetPokemonEntrySuccess()).toEqual(expectedAction)
  })
  it('dispatch action when action type GET_ENTRY_FAILED', () => {
    const expectedAction = {
      type: GET_ENTRY_FAILED,
    }
    expect(GetPokemonEntryFailed()).toEqual(expectedAction)
  })
  it('dispatch action when action type CLEAR_POKEMON_DETAILS', () => {
    const expectedAction = {
      type: CLEAR_POKEMON_DETAILS,
    }
    expect(ClearPokemonDetails()).toEqual(expectedAction)
  })
})
