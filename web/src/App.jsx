import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Start from './principais/start'
import Login from './principais/login'
import SignIn from './principais/signin'
import Home from './principais/home'
import './App.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Start />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/home' element={<Home />}></Route>
      </Routes>
    </Router>
  )
}
export default App