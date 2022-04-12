import { useEffect, useState } from 'react'
import Header from './components/Header'
import Pokemon from './components/Pokemon'
import { MainContainerContent } from './styles'

function App() {

  const [pokemons, setPokemons] = useState([])
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [indexPage, setIndexPage] = useState(1);
  const [maxIndex, setMaxIndex] = useState(null);

  useEffect(() => {

    const callApiPokeomn = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon")
      const data = await response.json();

      setPokemons(data.results)
      setPreviousPage(data.previous)
      setNextPage(data.next)
      setMaxIndex(data.count)

    }
    callApiPokeomn();

  }, [])

  //Clicar no botão
  // Fazer a chamada API com a nova URL

  async function handleNextPage() {
    const response = await fetch(nextPage)
    const data = await response.json();
    setPokemons(data.results)
    setPreviousPage(data.previous)
    setNextPage(data.next)
    setIndexPage(indexPage + 1)
  }

  async function handlePreviousPage() {
    const response = await fetch(previousPage)
    const data = await response.json();
    setPokemons(data.results)
    setPreviousPage(data.previous)
    setNextPage(data.next)
    setIndexPage(indexPage - 1)

  }




  return (
    <>
      <Header />
      <MainContainerContent>
        {pokemons.map(pokemon => {
          return (
            <Pokemon key={pokemon.name} name={pokemon.name} />
          )
        })}

        <div className='pagination'>
          <button onClick={handlePreviousPage}
            disabled={previousPage == null ? true : false}>
            Voltar
          </button>

          <div className='index-container'>
            <span>{indexPage === 1 ? '' : indexPage - 1}</span>
            <span className="currentIndex">{indexPage}</span>
            <span>{indexPage === maxIndex ? '' : indexPage + 1}</span>
          </div>


          <button onClick={handleNextPage}>
            Próximo
          </button>
        </div>

      </MainContainerContent>
    </>
  )
}

export default App
