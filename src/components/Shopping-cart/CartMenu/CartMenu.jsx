import CartItem from "../CartItem/CartItem"
import "./CartMenu.css"

const CartMenu = ({ items, onClick, totalPrice }) => {
    return <div className="cart-menu">
        <div className="game_list">
            {
                items.length > 0 ? items.map(item => <CartItem game = {item} key= {item.title}/>) : "Корзина пуста"
            }
        </div>
        {
            items.length > 0 ?
                <div className="total-price">
                    <div>
                        <span>Итого:</span>
                        <span>{totalPrice}</span>
                    </div>
                    <button type="primary" size="m" onClick={onClick}>Оформить заказ</button>
                </div> : null

        }
    </div>
}

export default CartMenu