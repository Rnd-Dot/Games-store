import "./CartItem.css"

const CartItem = ({game}) => {
    return <div className="cart-item">
        <span>{game.title}</span>
        <div>
            <span>{game.price} руб.</span>
        </div>
    </div>
}

export default CartItem