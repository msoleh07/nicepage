import React from 'react'
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './router/home/Home'

const roter = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
        </Route>
    )
)

function Router() {
  return (
    <div className='router_page'>
        <RouterProvider router={roter}/>
    </div>
  )
}

export default Router