import {
  GET_POKEMON_LIST_STARTED,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILED,
} from '../../constants'

import {
  GetPokemonListStarted,
  GetPokemonListSuccess,
  GetPokemonListFailed,
} from '../HomeActtions'

describe("Home actions type test", () => {
  it("dispatch action when action type GET_POKEMON_LIST_STARTED", () => {
    const expectedAction = {
      type: GET_POKEMON_LIST_STARTED,
    }
    expect(GetPokemonListStarted()).toEqual(expectedAction)
  });
  it("dispatch action when action type GET_POKEMON_LIST_SUCCESS", () => {
    const expectedAction = {
      type: GET_POKEMON_LIST_SUCCESS,
    }
    expect(GetPokemonListSuccess()).toEqual(expectedAction)
  });
  it("dispatch action when action type GET_POKEMON_LIST_FAILED", () => {
    const expectedAction = {
      type: GET_POKEMON_LIST_FAILED,
    }
    expect(GetPokemonListFailed()).toEqual(expectedAction)
  });
});