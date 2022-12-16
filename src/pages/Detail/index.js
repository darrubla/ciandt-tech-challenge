import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Container } from '@mui/material'
import LoaderComponent from '../../components/Loader'

import GetPokemonDetails, { GetPokemonEntry } from '../../redux/actions/DetailActions'

import './Detail.scss'

function Detail({ pokemonDetails, isloading, pokemonEntry }) {
  const location = useLocation()
  const dispatch = useDispatch()
  const { pathname } = location
  const [pokemon, setPokemon] = useState(null)
  const [entry, setEntry] = useState(null)

  useEffect(() => {
    if (!pokemon) {
      dispatch(GetPokemonDetails(pathname))
    }
  }, [])

  useEffect(() => {
    if (Object.values(pokemonDetails).length >= 1) {
      setPokemon(pokemonDetails)
    }
  }, [pokemonDetails])

  useEffect(() => {
    if (Object.values(pokemonEntry).length >= 1) {
      setEntry(pokemonEntry)
    }
  }, [pokemonEntry])

  useEffect(() => {
    if (pokemon && !entry) {
      dispatch(GetPokemonEntry(pokemon.id))
    }
  }, [pokemon])

  const showTypes = () => (
    pokemon.types.map((type) => <label key={`${type.type.name}`}>{type.type.name}</label>)
  )

  const handlePokeInfo = () => {
    if (pokemon) {
      const { name, id } = pokemon
      return (
        <Container>
          <LoaderComponent show={isloading} />
          <section className="detail-card container" to={`/${name}`}>
            <div className="detail-card__title">
              <h3>#{id} - {name}</h3>
            </div>
            <div className="detail-card__body">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={`logo pokemon #${id}`} />
              <section>
                <div className="detail-card__types">
                  {showTypes()}
                </div>
                {entry &&
                  <h5>
                    <strong>Description: </strong>{entry.flavor_text_entries[10].flavor_text}
                  </h5>
                }
                {entry &&
                  <h5>
                    <strong>Growth rate: </strong> {entry.growth_rate.name}
                  </h5>
                }
              </section>
            </div>
          </section>
        </Container>
      )
    }
    return null
  }
  return handlePokeInfo()
}

Detail.propTypes = {
  pokemonDetails: PropTypes.object.isRequired,
  isloading: PropTypes.bool.isRequired,
  pokemonEntry: PropTypes.object.isRequired,
}

function mapStateToProps({
  Detail: { pokemonDetails, pokemonDetailsIsLoading, pokemonEntry, PokemonEntryIsLoading }
}) {
  return {
    pokemonDetails,
    pokemonEntry,
    isloading: pokemonDetailsIsLoading || PokemonEntryIsLoading,
  }
}

export default connect(mapStateToProps)(Detail)