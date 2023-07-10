import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './principais/welcome'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
      </Routes>
    </Router>
  )
}
export default App