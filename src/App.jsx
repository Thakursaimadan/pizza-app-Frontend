import './App.css'
import AddProduct from './pages/Admin/Addproduct'
import Denied from './pages/auth/Denied'
import Login from './pages/auth/Login'
import NotFound from './pages/auth/NotFound'
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
          <Route path='/denied' element={<Denied/>}/>
          <Route path='/admin/addProduct' element={<AddProduct/>}/>
          <Route path='*' element={<NotFound/>}></Route>
     
        </Routes>
    </>
   

  )
}

export default App
