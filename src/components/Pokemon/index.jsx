import React from 'react';

import {PokemonStyles } from './styles';

function Pokemon({name, urlImage}) {
  return (
    <PokemonStyles>
        <img src={urlImage} alt={name}/>
        <h3>{name}</h3>
    </PokemonStyles>
  );
}

export default Pokemon;