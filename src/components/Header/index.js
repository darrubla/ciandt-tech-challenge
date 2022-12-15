/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Autocomplete, TextField } from '@mui/material'
import FilterPokemon, { ClearFilter } from '../../redux/actions/FilterActions'

import { getListado } from '../../services/pokeAPI'
import notify from '../../utils/notifyToast'

import './Header.scss'

function Header({ name, filterPokemon }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [listado, setListado] = useState(null)
  const [options, setOptions] = useState([])
  const [value, setValue] = useState('')
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    const lista = getListado(undefined, 2000)
    lista
      .then(res => setListado(res.data.results))
      .catch(() => {
        notify('error', '¡Upps, parece que la base de datos de la pokedex está en actualización, prueba más tarde!', 'getListadoError')
      })
  }, [])

  useEffect(() => {
    if (location?.pathname !== 'home' && filterPokemon) {
      navigate('/home')
    }
  }, [filterPokemon])

  useEffect(() => {
    if (listado) {
      const optionsArr = []
      listado.forEach((item) => optionsArr.push(item.name))
      setOptions(optionsArr)
    }
  }, [listado])

  useEffect(() => {
    if (value?.length >= 1 && options.includes(value)) {
      const index = options.indexOf(value)
      dispatch(FilterPokemon(listado[index]?.url))
    } else {
      dispatch(ClearFilter())
    }
  }, [value])

  return (
    <header>
      <div className="header__content">
        {name && <span className="header__user-name">{name}</span>}
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          value={value}
          inputValue={inputText}
          onInputChange={(event, newInputValue) => {
            setInputText(newInputValue);
          }}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="option" />}
        />
      </div>
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  filterPokemon: PropTypes.object.isRequired,
  isloading: PropTypes.bool.isRequired,
}

function mapStateToProps({
  Filter: { filterPokemon },
}) {
  return {
    filterPokemon,
  }
}

export default connect(mapStateToProps)(Header)
