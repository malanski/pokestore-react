import { Link } from "react-router-dom";

export function PokeList({pokemons = []}) {

    return (
        <ul>
            {pokemons.map((pokemon, index) =>
                <li key={index}>
                    <Link to={`/pokemons/${pokemon}`}>
                        {pokemon}
                    </Link>
                </li>
            )}
        </ul>
    )

    // return (
    //     ['Pikachu', 'Squirtle', ''].map((pokemon) => <span>{pokemon}</span>)
    // )
}
