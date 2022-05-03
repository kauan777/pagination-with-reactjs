import React, { useEffect, useState } from 'react';
import Pokemon from '../components/Pokemon';

import '../styles/allPokemons'
import { MainContainerContent } from '../styles/allPokemons';


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

            setPokemons(data.results)
            setPreviousPage(data.previous)
            setNextPage(data.next)
            setMaxIndex(data.count)

        }
        callApiPokeomn();

    }, [])

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
        <MainContainerContent>
            {pokemons.map(pokemon => {
                return (
                    <Pokemon key={pokemon.name} name={pokemon.name} />
                )
            })}

            <div className='pagination'>
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
            </div>

        </MainContainerContent>
    );
}

export default AllPokemons;