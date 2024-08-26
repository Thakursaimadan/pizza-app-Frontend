import './App.css'
import Login from './pages/auth/Login'
import Signup from './pages/auth/signup'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/auth/signup' element={<Signup/>}/>
          <Route path='/auth/login' element={<Login/>}/>
     
        </Routes>
    </>
   

  )
}

export default App
