import { faTimes, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from "react-redux";

import { closeCart } from "../../store";

export const CartItem = (props) => {
    const { item } = props;
    return (
        <div className="cart-pokemon-item">
            <div className="cart-pokemon-item-info">
                <img src={item.imageUrl} alt={item.name}/>
                <div>
                    <p>{item.name}</p>
                    <p><span className="qnty">{item.qnty} x</span> R$ {item.price}</p>
                </div>
            </div>
            <div className="cart-pokemon-item-remove">
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
    );
}

export const Cart = (props) => {
    const { items: pokemons, total } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const cartClose = () => dispatch(closeCart());

    return (
        <div>
            <div onClick={cartClose} className="cart-overlay"></div>
            <div className="cart">
                <div className="cart-title">
                    <span>PokeBall</span>
                    <div className="cart-close">
                        Close <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>
                {pokemons.length === 0 && <div className="cart-empty">Nothing inside your PokeBall</div>}

                {pokemons.length > 0 && <div>
                    {pokemons.map((pokemon, index) => <CartItem key={index} item={pokemon} />)}
                    <p className="cart-total"><span>Total:</span> <span>R$ {total}</span></p>
                    <button className="btn-buy">Submit Purchase</button>
                </div>}
            </div>
        </div>
    )
}