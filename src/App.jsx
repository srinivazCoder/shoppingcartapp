
import Home from './pages/Home'
import Cart from "./pages/Cart"
import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom"; 
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/cart" element={<Cart />} />
      </Routes>
      
    </>
  )
}

export default App
