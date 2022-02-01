import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonApi } from "../../services/api";

import '../../assets/scss/Pokemon.scss';

export const Pokemon = (props) => {
    const { id } = useParams();

    const [state, setState] = useState({
        weight: 0,
        height: 0,
        abilities: [],
        moves: [],
        stats: [],
        types: [],
    });

    useEffect(() => {
        PokemonApi.getPokemonById(id).then(({ data }) => {
            console.log(data)
            setState(data);
        }).catch((error) => {
            console.log(error);
        });
    }, [id]);

    return (
        <div className="pokemon">
            <div className="pokemon-info">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${state.id}.png`} alt={state.name} />

                <div>
                    <h1>{String(state.name)}</h1>
                    <p>Weight: {state.weight / 10}kg</p>
                    <p>Height: {state.weight / 10}m</p>
                    <p>Type</p>
                    <ul>
                        {state.types.map(({ type }, index) => <li key={index}>{type.name}</li>)}
                    </ul>
                    <ul>
                        {state.stats.map((stat, index) => <li key={index}>{stat.stat.name} - {stat.base_stat}</li>)}
                    </ul>
                </div>
            </div>
            
            <p>Abilities</p>
            <ul>
                {state.abilities.map(({ ability }, index) => <li key={index}>{ability.name}</li>)}
            </ul>
            <ul>
                {state.moves.map(({ move }, index) => <li key={index}>{move.name}</li>)}
            </ul>

        </div>
    );
}