import './Banner.scss';
import maximizeIcon from '../../assests/icons/maximize.svg'

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__text-container">
                <div className="banner__heading-container">
                    <h1 className="banner__heading">Hello World,</h1>
                    <h1 className="banner__heading">I'm Ahmad</h1>
                </div>
                <h2 className="banner__sub-heading">Software Engineer & Full-Stack Developer</h2>
            </div>
            <div className="terminal">
                <div className="terminal__toolbar-container">
                    <h3 className="terminal__heading">Terminal</h3>
                    <img src={maximizeIcon} alt="" className="terminal__icon" />
                </div>
                <div className="terminal__area"></div>
            </div>
        </section>
    )

}

export default Banner;