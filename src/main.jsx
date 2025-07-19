import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/home/Home.jsx'; 
import Aboutus from './components/Aboutus/Aboutus.jsx';
import {Route} from 'react-router-dom'

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom'
import Contact from './components/contact/Contact.jsx';
import More from './components/More/More.jsx';
import Github from './components/github/Github.jsx';







// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<App />,
//     children:[
//       {path:"",
//         element:<Home />

//       },{
//         path:"about",
//         element:<Aboutus />
//       },{
//         path:"contact",
//         element:<Contact />
//       }
      
//     ]
//   }
// ])


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<Aboutus />} />
      <Route path='contact' element={<Contact />} />
      <Route path='more' element={<More />} />
      <Route path='github' element={<Github />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
