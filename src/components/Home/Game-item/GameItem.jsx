import GameCover from '../Game-covers/GameCovers'
import { useDispatch, useSelector } from 'react-redux'
import './GameItem.css'
import { deleteItemCart, setItemCart } from '../../../redux/card/reducer'

const GameItem = ({ game }) => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsCart)
    const isItemInCart = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation()
        if( isItemInCart) {
            dispatch(deleteItemCart(game.id))
        }
        else{
            dispatch(setItemCart(game))
        }
        
    }

    return <div className="game_item">
        <div>
            <GameCover image={game.image}/>
            <span className="game_titel">{game.title}</span>
            <div className="game_genres">
                {game.genres.map(g => <div className="genres">{g}</div>)}
            </div>
            <span className='game_price'>{game.price}руб</span>
            <button  onClick={handleClick} className="game_buy">
                {
                   isItemInCart ? "Убрать из корзины" : "В корзину"
                }
            </button>
        </div>
    </div>
}

export default GameItem