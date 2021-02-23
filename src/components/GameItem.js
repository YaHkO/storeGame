import '../styles/GameItem.scss'

function GameItem({name, category, release, platform, cover, price, cart, updateCart}) {

    function addToCart(name, price) {
        const currentGameSaved = cart.find((game) => game.name === name)
        if (currentGameSaved) {
            const cartFilteredCurrentGame = cart.filter(
                (game) => game.name !== name
            )
            updateCart([
                ...cartFilteredCurrentGame,
                {name, price, amount: currentGameSaved.amount +1}
            ])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }

    return (
        <div className="game-presentation">
            <img className='game-presentation-cover' src={cover} alt=""/>
            <div className="game-presentation-category">{category}</div>
            <div className="game-presentation-title">{name}
                <div className="game-presentation-price">{price}€</div>
            </div>
            <button
                onClick={() => addToCart(name, price)}
                className='game-presentation-add-to-cart'>Ajouter au panier</button>
        </div>
    )
}

export default GameItem