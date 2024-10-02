
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Calculadora from './Pages/Calculadora'
import Resultado from './Pages/Resultado'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Calculadora/>} />
      <Route path='/resultado' element={<Resultado/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
