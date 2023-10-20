import './LandingPage.scss'
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Divider from '../../components/Divider/Divider';
import About from '../../components/About/About';
import Skill from '../../components/Skill/Skill';
import Project from '../../components/Project/Project';
import Footer from '../../components/Footer/Footer';
import { useRef } from 'react';

const LandingPage = () => {
    const aboutSection = useRef();
    const projectSection = useRef();
    return (
        <>
            <Header aboutSection={aboutSection} projectSection={projectSection} />
            <Banner projectSection={projectSection} />
            <Divider />
            <About aboutSection={aboutSection} />
            <Skill />
            <Project projectSection={projectSection} />
            <Footer />
        </>
    )
}

export default LandingPage;