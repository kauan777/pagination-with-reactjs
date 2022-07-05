import React, { useEffect, useState } from 'react';
import Pokemon from '../components/Pokemon';
import { MainContainerContent, Pagination } from '../styles/allPokemons';
import '../styles/allPokemons'

function AllPokemons() {

    const [pokemons, setPokemons] = useState([])
    const [previousPage, setPreviousPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [indexPage, setIndexPage] = useState(1);
    const [maxIndex, setMaxIndex] = useState(null);
    
    

    useEffect(() => {

        const callApiPokeomn = async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon")
            const data = await response.json();
           // const allPokemons = [];
            
            data.results.forEach( async (item) => {
                const { url, name } = item;
                const response2 = await fetch(url);
                const data2 = await response2.json();
                const image = data2.sprites.other.dream_world.front_default;
                setPokemons(pokemons => [...pokemons, {
                    name,
                    image
                }])
                
            })
            //setPokemons(allPokemons);
            setPreviousPage(data.previous)
            setNextPage(data.next)
            setMaxIndex(data.count)
        }
        callApiPokeomn();
    }, [])
    
    console.log(pokemons)
    
    
    async function handleNextPage() {
        const response = await fetch(nextPage)
        const data = await response.json();
        setPokemons(data.results)
        setPreviousPage(data.previous)
        setNextPage(data.next)
        setIndexPage(indexPage + 1)
        window.scrollTo(top);
    }

    async function handlePreviousPage() {
        const response = await fetch(previousPage)
        const data = await response.json();
        setPokemons(data.results)
        setPreviousPage(data.previous)
        setNextPage(data.next)
        setIndexPage(indexPage - 1)
        window.scrollTo(top);
    }

    return (
        <>
            <Pagination className='pagination pagination-first'>
                <button onClick={handlePreviousPage}
                    disabled={previousPage == null}>
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
            </Pagination>
            <MainContainerContent>

                {pokemons.map((pokemon, index) => {
                    return (
                        <Pokemon key={pokemon.name} name={pokemon.name} urlImage={pokemon.image} />
                    )
                })}
            </MainContainerContent>
            <Pagination className='pagination'>
                <button onClick={handlePreviousPage}
                    disabled={previousPage == null}>
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
            </Pagination>
        </>
    );
}

export default AllPokemons;