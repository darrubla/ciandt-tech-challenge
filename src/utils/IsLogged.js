import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import PropTypes from 'prop-types'

import { auth } from '../services/firebase'

function IsLogged(props) {
  const { children } = props
  const [user] = useAuthState(auth)
  if (!user) {
    return <Navigate to="/" />
  }

  return children
}

IsLogged.propTypes = {
  children: PropTypes.element,
}
IsLogged.defaultProps = {
  children: <div>Element</div>,
}


export default IsLogged