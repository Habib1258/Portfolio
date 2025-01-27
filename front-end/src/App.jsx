import React, { useState } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate, 
  BrowserRouter
} from 'react-router-dom';
import HomePage from './pages/homePage';
import MainLayout from './layout/MainLayout';
import Projects from './pages/projects';
import Skills from './pages/Skills';
import Contact from './pages/contact';
import Loader from './port_comp/Loader';
import ErrorPage from './pages/NotFoundPage';
import Helmet from'react-helmet';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/Portfolio" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)

function App() {
  const [showLoader, setshowLoader] = useState(false);
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
      </Helmet>
      <RouterProvider router={router} />
      <BrowserRouter>
      { showLoader ? <Loader/> : null}
        
      </BrowserRouter >
    </>
  )
}

export default App