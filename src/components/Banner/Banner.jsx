import './Banner.scss';
import linkedInIcon from '../../assests/icons/linkedIn.svg';
import githubIcon from '../../assests/icons/github.svg';
import { Link } from 'react-router-dom';
import Terminal from '../Terminal/Terminal';

const Banner = ({ projectSection }) => {
    return (
        <section className="banner">
            <div className="banner__text-container">
                <div className="banner__heading-container">
                    <h1 className="banner__heading">Hello World,</h1>
                    <h1 className="banner__heading">I'm Ahmad Akhtar</h1>
                </div>
                <h2 className="banner__sub-heading">Software Engineer & Full-Stack Developer</h2>
                <div className="banner__icon-container">
                    <Link to='https://github.com/Unknown-0perator' className='banner__link'><img src={githubIcon} alt="" className="banner__icon" />GitHub</Link>
                    <Link to='https://www.linkedin.com/in/ahmadrashidakhtar/' className='banner__link'><img src={linkedInIcon} alt="" className="banner__icon" />LinkedIn</Link>
                </div>
            </div>
            <Terminal projectSection={projectSection} />
        </section>
    )

}

export default Banner;