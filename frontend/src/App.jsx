
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { AddBlog } from './Pages/AddBlog'
import BlogDetails from './Pages/BlogDetails'
import Dashbord from './Pages/Dashbord'
import Home from './Pages/Home'
import Login from './Pages/Login'
import LoginOnly from './Pages/LoginOnly'
import Register from './pages/Register'
// import { LoginOnly } from './Pages/LoginOnly'
// import Register from './Pages/Register'

export default function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/BlogDetails/:id' element={<BlogDetails />} />
        <Route path='/dashbord' element={<LoginOnly element={<Dashbord />} />} />
        <Route path='/*' element={<h1>Page note found</h1>} />
        <Route  path='/addBlog' element={<AddBlog/>}/>
      </Routes>
    </BrowserRouter>



  </>
}
