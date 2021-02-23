import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import { useEffect } from 'react'

function Cart({cart, updateCart}) {
    const total = cart.reduce(
        (acc, gameType) => acc + gameType.amount * gameType.price, 0
    )
    useEffect(() => {
        document.title = total > 0 ? `Montant du panier ${total}€` : 'Choisissez des jeux'
    }, [total])

    const shoppingCartSvg = <FontAwesomeIcon icon={faShoppingCart}/>
    const TrashSvg = <FontAwesomeIcon icon={faTrash}/>
    return (
        <div className="header-item">
            {cart.length > 0 ? (
                <div>
                    <button onClick={() => updateCart([])}>{TrashSvg} Vider</button>
                    <span className='header-item-span'>{total.toFixed(2)}€ {shoppingCartSvg}</span>
                    <span className='header-item-list'>
                        {cart.map(({name, price, amount}, index) => (
                        <div key={`${name}-${index}`}>
                            {name} {price}€ x {amount}
                        </div>
                    ))}
                    </span>
                </div>
            ) : (
                <span className='header-item-span'>Panier vide</span>
            )
            }

        </div>
    )
}

export default Cart