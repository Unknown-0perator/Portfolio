// Import the 'logo' image and styles
import './Header.scss'
import downloadIcon from '../../assests/icons/download.svg';
import FileSaver from 'file-saver';

// Import necessary React components and hooks
import { useState } from 'react';
import { Link } from 'react-router-dom';


// Define the Header component
const Header = ({ aboutSection, projectSection }) => {

    // State to manage mobile screen navbar menu
    const [menuOpen, setMenuOpen] = useState(false)


    // Function for closing the menu after clicking on a link in the navbar
    const menuClose = () => {
        setMenuOpen(false);
    }

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop - 70,
            behavior: "smooth"
        })
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const saveFile = () => {
        FileSaver.saveAs(
            `${process.env.PUBLIC_URL}/resume/Ahmad_Akhtar.pdf`,
            'Ahmad_Akhtar.pdf'
        )
    }

    return (
        <header className="header-section">
            <div className="header">
                <div className="header__wrapper">
                    <Link to='/' onClick={scrollToTop} className="header__logo">Ahmad Akhtar</Link>
                    <div className={menuOpen ? 'header__menu header__menu--close' : "header__menu"} onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}></div>
                </div>
                <nav className={menuOpen ? 'navbar navbar--close' : "navbar"}>

                    <ul className='navbar__list'>

                        <li className="navbar__item">
                            <Link onClick={() => {
                                menuClose();
                                scrollToSection(aboutSection)
                            }} className="navbar__link">./About</Link>
                        </li>
                        <li className="navbar__item">
                            <Link onClick={() => {
                                menuClose();
                                scrollToSection(projectSection)
                            }} className="navbar__link">./Project</Link>
                        </li>
                        <li className="navbar__item">
                            <button onClick={() => {
                                menuClose();
                                saveFile();
                            }} className="navbar__link navbar__link--download"><img src={downloadIcon} alt="" className='navbar__icon' />Resume</button>
                        </li>

                    </ul>

                </nav>
            </div>
        </header >
    )
}

export default Header;