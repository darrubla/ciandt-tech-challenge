import axios from 'axios'
import notify from '../../utils/notifyToast'
import {
  handleActionCatch,
  validateServerResponse,
} from '../../utils/errorUtils'
import {
  GET_POKEMON_LIST_STARTED,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILED,
} from '../constants'

export const GetPokemonListStarted = () => ({
  type: GET_POKEMON_LIST_STARTED,
})

export const GetPokemonListSuccess = (payload) => ({
  type: GET_POKEMON_LIST_SUCCESS,
  payload,
})

export const GetPokemonListFailed = (payload) => ({
  type: GET_POKEMON_LIST_FAILED,
  payload,
})

const GetPokemonList = (offset = 0, limit = 20) => async (dispatch) => {
  dispatch(GetPokemonListStarted())
  try {
    const urlBase = 'https://pokeapi.co/api/v2/pokemon'
    const url = `${urlBase}/?limit=${limit}&offset=${offset}`
    const result = await axios({
      method: 'GET',
      url
    })

    validateServerResponse(result)
    dispatch(GetPokemonListSuccess(result.data.results))
  } catch (error) {
    notify('error', '¡Upps, parece que la base de datos de la pokedex está en actualización, prueba más tarde!', 'getListadoError')
    handleActionCatch(error, dispatch, GetPokemonListFailed, 'Get Pokemon List')
  }
}

export default GetPokemonList
