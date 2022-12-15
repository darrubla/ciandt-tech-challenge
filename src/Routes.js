import React from 'react'
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Login from './pages/Login'

import 'react-toastify/dist/ReactToastify.css';

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Unprotected Routes */}
        <Route path="/" element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </BrowserRouter>
  )
}
