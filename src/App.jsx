import Header from './components/Header'
import AllPokemons from './pages/AllPokemons'
import Home from './pages/Home'

import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='pokemons' element={<AllPokemons/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
