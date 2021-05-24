import './header.scss'
import { Link } from 'react-router-dom'
function Header(){
    return(
            <header className="header">
         <div className="container">
             <div className="header__row">
                 <a href="#" className="header__logo row">
                    <span className="header__logo--top">LUXURY</span>
                    <span className="header__logo--bottom">HOTELS</span>
                 </a>
                 <ul className="header__menu col-6">
                    <li ><Link className="header__nav" to="/">Home</Link></li>
                    <li ><Link className="header__nav" to="/facilities">Facilities</Link></li>
                    <li ><Link className="header__nav" to="/rooms">Rooms</Link></li>
                    <li ><Link className="header__nav" to="/contact">Contact-us</Link></li>
                 </ul>
             </div>
         </div>   
    </header>
        
    )
}
export default Header