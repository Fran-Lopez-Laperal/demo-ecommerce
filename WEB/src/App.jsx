
import './App.css'
import { Route, Routes } from "react-router-dom"
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Home from './components/pages/Home/Home'
import Products from './components/Products/Products'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products/>} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
