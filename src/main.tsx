
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.tsx'
import './index.css'

import HomePage from './pages/HomePage.tsx'
import SobrePage from './pages/sobrePage.tsx'
import ContatoPage from './pages/ContatoPage.tsx'
import AreasDeAtuacaoPage from './pages/AreasDeAtuacaoPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/sobre', element: <SobrePage /> },
      { path: '/areas-de-atuacao', element: <AreasDeAtuacaoPage /> },
      { path: '/contato', element: <ContatoPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)