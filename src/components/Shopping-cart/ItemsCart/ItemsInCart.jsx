import "./ItemsInCart.css"

const ItemsInCart = ({amount = 0}) => {
    return amount > 0 ? <div className="amount">{amount}</div> : null
}

export default ItemsInCart