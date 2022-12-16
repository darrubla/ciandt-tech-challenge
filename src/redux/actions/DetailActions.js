import axios from 'axios'
import {
  handleActionCatch,
  validateServerResponse,
} from '../../utils/errorUtils'
import {
  GET_DETAILS_STARTED,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILED,
  GET_ENTRY_STARTED,
  GET_ENTRY_SUCCESS,
  GET_ENTRY_FAILED,
} from '../constants'

export const GetPokemonDetailsStarted = () => ({
  type: GET_DETAILS_STARTED,
})

export const GetPokemonDetailsSuccess = (payload) => ({
  type: GET_DETAILS_SUCCESS,
  payload,
})

export const GetPokemonDetailsFailed = (payload) => ({
  type: GET_DETAILS_FAILED,
  payload,
})

export const GetPokemonEntryStarted = () => ({
  type: GET_ENTRY_STARTED,
})

export const GetPokemonEntrySuccess = (payload) => ({
  type: GET_ENTRY_SUCCESS,
  payload,
})

export const GetPokemonEntryFailed = (payload) => ({
  type: GET_ENTRY_FAILED,
  payload,
})

const GetPokemonDetails = (pokemonName) => async (dispatch) => {
  dispatch(GetPokemonDetailsStarted())
  try {
    const urlBase = 'https://pokeapi.co/api/v2'
    const url = `${urlBase}${pokemonName}`
    const result = await axios({
      method: 'GET',
      url
    })
    validateServerResponse(result)
    dispatch(GetPokemonDetailsSuccess(result.data))
  } catch (error) {
    handleActionCatch(error, dispatch, GetPokemonDetailsFailed, 'Get Pokemon Detail')
  }
}

export const GetPokemonEntry = (pokemonId) => async (dispatch) => {
  dispatch(GetPokemonEntryStarted())
  try {
    const urlBase = 'https://pokeapi.co/api/v2/pokemon'
    const url = `${urlBase}-species/${pokemonId}/`
    const result = await axios({
      method: 'GET',
      url
    })
    validateServerResponse(result)
    dispatch(GetPokemonEntrySuccess(result.data))
  } catch (error) {
    handleActionCatch(error, dispatch, GetPokemonEntryFailed, 'Get Pokemon Entry')
  }
}

export default GetPokemonDetails
