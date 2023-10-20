import './Footer.scss';
import linkedInIcon from '../../assests/icons/linkedIn.svg';
import githubIcon from '../../assests/icons/github.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">© Copyright 2023. Made by Ahmad Akhtar</p>
            <div className="footer__icon-container">
                <Link aria-label='GitHub Account' to='https://github.com/Unknown-0perator' className='footer__link'><img src={githubIcon} alt="github icon" className="footer__icon" /></Link>
                <Link aria-label='LinkedIn Account' to='https://www.linkedin.com/in/ahmadrashidakhtar/' className='footer__link'><img src={linkedInIcon} alt="linkedin icon" className="footer__icon" /></Link>
            </div>
        </footer>
    )
}

export default Footer;