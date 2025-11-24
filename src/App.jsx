import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Layout/Pages/Home'
import WebLayout from './Layout/WebLayout'
import Work from './Layout/Pages/Work'
import Skills from './Layout/Pages/Skills'
import About from './Layout/Pages/About'
import Contact from './Layout/Pages/Contact'

function App() {
  const Themeroute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout/>}>
      
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="skills" element={<Skills />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={Themeroute}/>
    </>
  )
}

export default App
