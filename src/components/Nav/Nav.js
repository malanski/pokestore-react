
import { toggleCart } from '../../store';

import './Nav.scss';

import {
    Outlet,
    Link,
    useMatch,
    useResolvedPath
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBell, faAddressBook, faList } from '@fortawesome/free-solid-svg-icons'

// import { navItens } from './navItens';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link className={match ? "active" : ""}
        to={to}
        {...props}
        >
            {children}
        </Link>
    );
}

export const Nav = (props) => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.cart.items);

    return (
        <nav className='navigation'>
            <div className='container'>
                <div>
                    <ul className='nav-links'>
                        <li>
                            <CustomLink to="/"><span>
                                <FontAwesomeIcon icon={faHome}/> 
                                Home
                            </span></CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/about"><span>
                            <FontAwesomeIcon icon={faAddressBook}/> 
                                About
                            </span></CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/contact"><span>
                            <FontAwesomeIcon icon={faBell}/> 
                                Contact
                            </span></CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/category"><span>
                            <FontAwesomeIcon icon={faList}/> 
                                Category
                            </span></CustomLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <button onClick={() => dispatch(toggleCart())} className='btn-cart'>
                        <div className='pokeball'></div>
                        {pokemons.length > 0 && <span className='pokeball-count'>{pokemons.length}</span>}
                    </button>
                </div>
            </div>
            <Outlet />
        </nav>
    );
}