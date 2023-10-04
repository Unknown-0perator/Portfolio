// Import the 'logo' image and styles
import './Header.scss'

// Import necessary React components and hooks
import { useState } from 'react';
import { Link } from 'react-router-dom';


// Define the Header component
const Header = ({ isLoggedIn, setIsLoggedIn }) => {

    // State to manage mobile screen navbar menu
    const [menuOpen, setMenuOpen] = useState(false)


    // Function for closing the menu after clicking on a link in the navbar
    const menuClose = () => {
        setMenuOpen(false);
    }

    return (
        <header className="header">
            <div className="header-container">
                <div className="header__wrapper">
                    <Link to='/' className="header__logo">Ahmad Akhtar</Link>
                    <div className={menuOpen ? 'header__menu header__menu--close' : "header__menu"} onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}></div>
                </div>
                <nav className={menuOpen ? 'navbar navbar--close' : "navbar"}>

                    <ul className='navbar__list'>

                        <li className="navbar__item">
                            <Link to='/' onClick={menuClose} className="navbar__link">./About</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='/tasks' onClick={menuClose} className="navbar__link">./Project</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='login' onClick={menuClose} className="navbar__link">Resume</Link>
                        </li>

                    </ul>

                </nav>
            </div>
        </header>
    )
}

export default Header;