import {gamesDataList} from '../datas/gamesDataList'
import '../styles/GameList.scss'
import GameItem from '../components/GameItem'
import Categories from "./Categories";
import { useState } from 'react'

function GameList({cart, updateCart}) {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = gamesDataList.reduce(
        (acc, game) =>
            acc.includes(game.category) ? acc : acc.concat(game.category), []
        )

    return (
        <div className='game-container'>
            <div className="game-list-category">
                <Categories
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
            </div>


            <div className="game-list-game mt-50">
                {gamesDataList.map(({id, name, category, release, platform, cover, price}) =>
                    !activeCategory || activeCategory === category ? (
                    <div key={id}>
                        <GameItem
                            name={name}
                            category={category}
                            release={release}
                            platform={platform}
                            cover={cover}
                            price={price}
                            cart={cart}
                            updateCart={updateCart}
                        />
                    </div>
                ) : null )}
            </div>
        </div>
    )
}

export default GameList