import './Footer.scss';
import linkedInIcon from '../../assests/icons/linkedIn.svg';
import githubIcon from '../../assests/icons/github.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">© Copyright 2023. Made by Ahmad Akhtar</p>
            <div className="footer__icon-container">
                <Link className='footer__link'><img src={githubIcon} alt="" className="footer__icon" /></Link>
                <Link className='footer__link'><img src={linkedInIcon} alt="" className="footer__icon" /></Link>
            </div>
        </footer>
    )
}

export default Footer;