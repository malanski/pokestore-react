import './Aside.scss';
import  logocardgame from '../../assets/images/logo-cardgame.png'
import  logopokebal from '../../assets/images/logo-pokebal.png'
import  logo from '../../assets/images/logo.png'


export function Aside() {
    return (
        <aside>
            <img className='logo-cardgame' src={logocardgame} alt="Pokémon Card Game" />
            <img className='logo-pokebal' src={logopokebal} alt="Pokémon ball" />
            <img className='logo' src={logo} alt="Pokémon" />
        </aside>
    )
};