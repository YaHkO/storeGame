import Header from './Header'
import GameList from './GameList'
import gameBoy from '../assets/game-boy.png'
import '../styles/Header.scss'
import {useState, useEffect} from 'react';

function App() {
    const savedCart = localStorage.getItem('gameCart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
    useEffect(() => {
        localStorage.setItem('gameCart', JSON.stringify(cart))
    }, [cart])

    return (
        <div className='App-root'>
            <Header cart={cart} updateCart={updateCart}>
                <img src={gameBoy} alt='gameboy' className='header-img'/>
                <h1 className="Dialog-title">Game center</h1>
            </Header>
            <GameList cart={cart} updateCart={updateCart}/>
        </div>
    );
}

export default App;
