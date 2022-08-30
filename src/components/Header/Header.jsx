import { NavLink } from 'react-router-dom'
import Cart from '../Shopping-cart/Cart/Cart'
import './Header.css'

const Header = () => {
    return <div className='header'>
        <div className='wrapper'>
            <NavLink to='/' className="header_games">
                Games
            </NavLink>
            <Cart />
        </div>
    </div>
}

export default Header