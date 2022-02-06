import './Aside.scss';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import  logocardgame from '../../assets/images/logo-cardgame.png'
import  logopokebal from '../../assets/images/logo-pokebal.png'
import  logo from '../../assets/images/logo.png'


export function Aside() {
    return (
        <aside>
            <img className='logo-pokebal' src={logopokebal} alt="Pokémon ball" />
            <h3>
                <FontAwesomeIcon icon={faArrowDown} />
                Card Game Store
                <FontAwesomeIcon icon={faArrowDown} />
            </h3>
            <iframe src="https://malanski.github.io/pokeLoja2/pokemon.html?id=6" title='PokeCard Store'></iframe>
            <img className='logo-cardgame' src={logocardgame} alt="Pokémon Card Game" />
            <img className='logo' src={logo} alt="Pokémon" />
        </aside>
    )
};