import './Banner.scss';

import Terminal from '../Terminal/Terminal';

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__text-container">
                <div className="banner__heading-container">
                    <h1 className="banner__heading">Hello World,</h1>
                    <h1 className="banner__heading">I'm Ahmad Akhtar</h1>
                </div>
                <h2 className="banner__sub-heading">Software Engineer & Full-Stack Developer</h2>
            </div>
            <Terminal />
        </section>
    )

}

export default Banner;