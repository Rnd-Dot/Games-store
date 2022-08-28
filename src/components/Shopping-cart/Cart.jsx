import './Cart.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Cart = () => {
    return <div className='cart'>
        <AiOutlineShoppingCart size={33} className='icon'/>
        <span className='total_price'> 300 руб</span>
    </div>
}

export default Cart
