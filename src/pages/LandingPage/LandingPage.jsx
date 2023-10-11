import './LandingPage.scss'
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Divider from '../../components/Divider/Divider';
import About from '../../components/About/About';
import Skill from '../../components/Skill/Skill';
import Project from '../../components/Project/Project';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {
    return (
        <>
            <Header />
            <Banner />
            <Divider />
            <About />
            <Skill />
            <Project />
            <Footer />
        </>
    )
}

export default LandingPage;