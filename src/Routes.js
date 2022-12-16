import React from 'react'
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Home from './pages/Home'
import Login from './pages/Login'
import Detail from './pages/Detail'
import Register from './pages/Register'
import Layout from './containers/Layout'

import 'react-toastify/dist/ReactToastify.css'
import IsLogged from './utils/IsLogged';

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Unprotected Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={
          <IsLogged >
            <Layout>
              <Outlet />
            </Layout >
          </IsLogged>
        }>
          <Route path="/home" element={<Home />} />
          <Route path="/pokemon/:name" element={<Detail />} />
        </Route>

        {/* Not Found Route */}
        <Route path="*" element={<Login />} />

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
