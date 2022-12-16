import axios from 'axios'

const urlBase = 'https://pokeapi.co/api/v2/pokemon'

export const getListado = (offset = 0, limit = 20) => {
  const url = `${urlBase}/?limit=${limit}&offset=${offset}`

  return axios({
    method: 'GET',
    url
  })
}

export const getPokeInfo = (url) => axios({
  method: 'GET',
  url
})

export const getUrl = (id) => {
  const url = `${urlBase}/${id}`
  return url
}
