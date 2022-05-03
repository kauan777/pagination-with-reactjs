import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import AllPokemons from './pages/AllPokemons'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import PokemonDetails from './pages/PokemonDetails'

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='pokemons' element={<AllPokemons/>}/>
       <Route path='pokemons/:slug' element={<PokemonDetails/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
