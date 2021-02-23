import Cart from './Cart'

function Header({ children, cart, updateCart }) {
    return (
        <div className='header-banner'>
            <div className='header-item'>
                {children}
            </div>
            <Cart cart={cart} updateCart={updateCart} />
        </div>
    )
}

export default Header