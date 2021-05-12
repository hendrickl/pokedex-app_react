import React, { FunctionComponent} from 'react';
import Pokemon from '../models/pokemon';

type Props = {
    pokemon: Pokemon;
};

const PokemonCard: FunctionComponent<Props> = ({pokemon}) => {

    return (
        <div>
            Ce composant est chargé d'afficher le pokemon : {pokemon.name}
        </div>
    );
}

export default PokemonCard;