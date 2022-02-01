import './Header.scss';

import { Nav } from '../Nav';
import  logo from '../../assets/images/logo.png'
// import { fa } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Header() {
    return (
        <header>
            <div className='container-header'>
                <h1>PokéStore</h1>

                <div className="social-links">


                    <a href="https://github.com/malanski" title="github">
                        <FontAwesomeIcon icon={faGithubAlt} />
                    </a>
                    <a href="https://www.linkedin.com/in/ulisses-malanski" title="linkedin">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                    <a href="https://www.facebook.com/ulisses.malanski/" title="instagram">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/ulissesmalanski_tattoo/" title="facebook">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>

                <img className='logo' src={logo} alt="Pokémon" />

            </div>
            
            <Nav/>
        </header>
    )
};