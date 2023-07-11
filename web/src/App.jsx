import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './principais/welcome'
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
        <Route path='/' element={<Welcome />}></Route>
      </Routes>
    </Router>
  )
}
export default App