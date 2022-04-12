import styled from 'styled-components'

export const PokemonStyles = styled.main`

    background-color: #D8D8D8;
    padding: 1rem;
    margin: 24px;
    border-radius: .25rem;
    transition: .2s ease-in-out;
    cursor: pointer;

    h3{
        color: #393939;
    }

    &:hover{
        background: #F8333C;
        transform: translateY(-1rem);
        box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035), 0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    
        h3{
        color: #fff;

        }
    
    }

`