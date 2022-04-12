import React from 'react';

import {PokemonStyles } from './styles';

function Pokemon({name}) {
  return (
    <PokemonStyles>
        <h3>{name}</h3>
    </PokemonStyles>
  );
}

export default Pokemon;