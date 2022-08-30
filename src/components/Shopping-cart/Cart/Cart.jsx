import './Cart.css'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import CartMenu from '../CartMenu/CartMenu'
import { useState } from 'react'
import ItemsInCart from '../ItemsCart/ItemsInCart'



const Cart = () => {

    const [isCartMenuVisible, isSetcartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsCart)
    const totalPrice = items.reduce((acc, item) => acc += item.price,0)

    return <div className='cart'>
        <ItemsInCart amount={items.length}/>
        <AiOutlineShoppingCart size={33} className='icon' onClick={() => isSetcartMenuVisible(!isCartMenuVisible)}/>
            {
            totalPrice > 0 ? <span className='total_price'>{totalPrice} руб</span> : null
            }
        {isCartMenuVisible && <CartMenu items={items} totalPrice={totalPrice}/>}
    </div>
}

export default Cart
