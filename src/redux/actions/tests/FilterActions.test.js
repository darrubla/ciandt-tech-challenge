import {
  FILTER_STARTED,
  FILTER_SUCCESS,
  FILTER_FAILED,
  CLEAR_FILTER,
} from '../../constants'

import {
  FilterPokemonStarted,
  FilterPokemonSuccess,
  FilterPokemonFailed,
  ClearFilter,
} from '../FilterActions'

describe('Filter actions type test', () => {
  it('dispatch action when action type FILTER_STARTED', () => {
    const expectedAction = {
      type: FILTER_STARTED,
    }
    expect(FilterPokemonStarted()).toEqual(expectedAction)
  })
  it('dispatch action when action type FILTER_SUCCESS', () => {
    const expectedAction = {
      type: FILTER_SUCCESS,
    }
    expect(FilterPokemonSuccess()).toEqual(expectedAction)
  })
  it('dispatch action when action type FILTER_FAILED', () => {
    const expectedAction = {
      type: FILTER_FAILED,
    }
    expect(FilterPokemonFailed()).toEqual(expectedAction)
  })
  it('dispatch action when action type CLEAR_FILTER', () => {
    const expectedAction = {
      type: CLEAR_FILTER,
    }
    expect(ClearFilter()).toEqual(expectedAction)
  })
})
