import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Pokemons from './routes/Pokemons.jsx'
import PokemonDetails from './routes/PokemonDetails.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import ContactDetails from './routes/ContactDetails.jsx'

// 1- Configurando o router
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Pokemons/>
//   },
//   {
//     path: "/details",
//     element: <PokemonDetails/>,
//   }
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    //3 - error Page
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "React-Router-Study",
        element: <Pokemons/>
      },
      {
        path: "/React-Router-Study/details",
        element: <PokemonDetails/>,
      },
      //5 - nested routes - identificador único
      {
        path: "React-Router-Study/details/:id",
        element: <ContactDetails/>,
      },
      //7 - navigate para páginas não existentes
      {
        path: "React-Router-Study/oldcontact",
        element: <Navigate to="/details"/>
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
