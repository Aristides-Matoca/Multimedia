import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Start from './principais/start'
import Login from './principais/login'
import SignIn from './principais/signin'
import Home from './principais/home'
import './App.css'
import { useState } from 'react'

function App() {


  /*A constante username vai ser uma auxiliar na hora de retirar os
   valores do login ou singUp e enviar para o Home*/
  const [username, setUsername] = useState(null);

  const handleLogin = (name) => {
    setUsername(name);
  };

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Start />}></Route>
          <Route path='/login' element={<Login onLogin={handleLogin}/>}></Route>
          <Route path='/signin' element={<SignIn nome={username}/>}></Route>
          <Route path='/home' element={<Home />}></Route>
      </Routes>
    </Router>
  )
}
export default App