import GameCover from '../Game-covers/GameCovers'
import './GameItem.css'

const GameItem = ({ game }) => {
    return <div className="game_item">
        <div>
            <GameCover image={game.image}/>
            <span className="game_titel">{game.title}</span>
            <div className="game_genres">
                {game.genres.map(g => <div className="genres">{g}</div>)}
            </div>
            <span className='game_price'>{game.price}руб</span>
            <button className="game_buy">Купить</button>
        </div>
    </div>
}

export default GameItem