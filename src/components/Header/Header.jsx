import { NavLink } from 'react-router-dom'
import Cart from '../Shopping-cart/Cart'
import './Header.css'

const Header = () => {
    return <div className='header'>
        <div className='wrapper'>
            <NavLink to='/' className="header_games">
                Games
            </NavLink>
            <NavLink to='cart' className="header_cart">
                <Cart />
            </NavLink>
        </div>
    </div>
}

export default Header