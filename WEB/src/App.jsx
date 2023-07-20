
import './App.css'
import { Route, Routes } from "react-router-dom"
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/pages/Home/Home'
import Products from './components/Products/Products'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/products/category/:category" element={<Products />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
