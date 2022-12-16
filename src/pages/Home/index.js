import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { Container } from '@mui/material'
import ButtonComponent from '../../components/Button'
import PokeCard from '../../components/PokeCard'
import LoaderComponent from '../../components/Loader'

import GetPokemonList from '../../redux/actions/HomeActtions'
import { auth } from '../../services/firebase'

import './Home.scss'

function Home({ filterPokemon, isloading, pokemonList }) {

  const dispatch = useDispatch()
  const [user] = useAuthState(auth)
  const [listado, setListado] = useState(null)
  const [offSet, setOffset] = useState(0)

  const setFilteredPokemon = () => {
    const { name } = filterPokemon
    setOffset(0)
    setListado([{
      name,
      url: `https://pokeapi.co/api/v2/pokemon/${name}`
    }])
  }

  useEffect(() => {
    if (!Object.values(filterPokemon)?.length >= 1) {
      dispatch(GetPokemonList(offSet))
    }
  }, [offSet])

  useEffect(() => {
    if (pokemonList?.length >= 1 && !Object.values(filterPokemon)?.length >= 1) {
      setListado(pokemonList)
    }
  }, [pokemonList])

  useEffect(() => {
    if (Object.values(filterPokemon)?.length >= 1) {
      setFilteredPokemon()
    } else {
      dispatch(GetPokemonList(offSet))
    }
  }, [filterPokemon])

  const handleListado = () => {
    if (listado && user) {
      return listado.map(pokemon => (
        <PokeCard
          user={user.email}
          key={pokemon.name}
          url={pokemon.url} />
      ))
    }
    return null
  }

  const handleClick = ({ name }) => {
    if (name === 'next') setOffset(offSet + 20)
    if (name === 'back' && offSet >= 20) setOffset(offSet - 20)
  }

  return (
    <Container>
      <LoaderComponent show={isloading} />
      <section className="home">
        {user && handleListado()}
      </section>
      {listado?.length >= 20 && (
        <div className="home__nav-buttons">
          <ButtonComponent
            name="back"
            id="Back-btn"
            action={({ target }) => handleClick(target)}
            variant="contained"
            text="< Back" />
          <ButtonComponent
            name="next"
            id="Next-btn"
            action={({ target }) => handleClick(target)}
            variant="contained"
            text="Next >" />
        </div>
      )}
    </Container>
  )
}

Home.propTypes = {
  filterPokemon: PropTypes.object.isRequired,
  isloading: PropTypes.bool.isRequired,
  pokemonList: PropTypes.array.isRequired,
}

function mapStateToProps({
  Filter: { filterPokemon, filterPokemonIsLoading },
  Home: { pokemonList, pokemonListIsLoading }
}) {
  return {
    filterPokemon,
    isloading: pokemonListIsLoading || filterPokemonIsLoading,
    pokemonList,
  }
}

export default connect(mapStateToProps)(Home)