/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { Container } from '@mui/material'
import ButtonComponent from '../../components/Button'
import LoaderComponent from '../../components/Loader'
import PokeCard from '../../components/PokeCard'

import { db, auth } from '../../services/firebase'
import { getUrl } from '../../services/pokeAPI'

export default function Favorites() {
  const [user] = useAuthState(auth)
  const [pages, setPages] = useState(0)
  const [pokemon, setPokemon] = useState([])
  const [docListener, setDocListener] = useState(0)
  const [favoritesList, setFavoritesList] = useState(null)
  const [offSet, setOffset] = useState(0)

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line no-unused-vars
      const unsubscribe = db
        .collection('usuarios')
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          const list = data.filter(item => item.id === user.multiFactor.user.email)
          setDocListener(list[0]);
        });
    }
  }, [])

  useEffect(() => {
    if (favoritesList) {
      const pokeArr = []
      setPages(Math.ceil((favoritesList.length + 1) / 20))
      favoritesList.sort((a, b) => a - b)
      favoritesList.forEach((poke) => pokeArr.push(getUrl(poke)))
      setPokemon(pokeArr)
    }
  }, [favoritesList])

  useEffect(() => {
    if (docListener) {
      setFavoritesList(docListener.favorites)
    }
  }, [docListener])

  const handleClick = ({ name }) => {
    if (name === 'next' && offSet < pages - 1) setOffset(offSet + 1)
    if (name === 'back' && offSet > 0) setOffset(offSet - 1)
  }

  const handleListado = () => {
    const listToRender = pokemon.slice(offSet * 20, (offSet + 1) * 20)
    return listToRender.map((pokeUrl, idx) => {
      const keyx = `${pokeUrl}${idx}`
      return (
        <PokeCard
          user={user.email}
          key={keyx}
          url={pokeUrl} />
      )
    })
  }

  return (
    <Container>
      <LoaderComponent />
      <section className="home">
        {handleListado()}
      </section>
      {(pages > 1 && pokemon) && (
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
      )
      }
    </Container>
  )
}