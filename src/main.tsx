import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import './styles/main.sass'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
