import './Project.scss';
import backIcon from '../../assests/icons/backward.svg';
import frontIcon from '../../assests/icons/forward.svg';
import recentIcon from '../../assests/icons/recent.svg';
import projectIcon from '../../assests/icons/project.svg';
import folderIcon from '../../assests/icons/folder.svg';
import textIcon from '../../assests/icons/text.svg';
import videoIcon from '../../assests/icons/video.svg';
import closeIcon from '../../assests/icons/close.svg';
import taskEaseLogo from '../../assests/logo/taskease.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Project = () => {

    const [folderStructure, setFolderStructure] = useState(true);
    const [projectOpen, setProjectOpen] = useState(false)
    const [textOpen, setTextOpen] = useState(false)


    const handleDescriptionOpen = () => {
        setFolderStructure(false);
        setTextOpen(true)
    }

    const handleClose = () => {
        setFolderStructure(true);
        setTextOpen(false)
    }

    return (
        <section className="project-section">
            <div className="section-heading">Projects</div>
            <div className="project">
                <div className="project__title-container">
                    <h3 className="project__title">project</h3>
                </div>
                <div className="project__toolbar-container">
                    <div className="project__toolbar">
                        <img onClick={e => {
                            e.preventDefault();
                            setProjectOpen(false);
                        }} src={backIcon} alt="" className="project__toolbar-icon" />
                        <img src={frontIcon} alt="" className="project__toolbar-icon" />
                    </div>
                </div>
                <div className="project__detail-container">
                    <div className="sidebar">
                        <ul className="sidebar__list">
                            <li className="sidebar__item"><img src={recentIcon} alt="" className="sidebar__icon" />recent</li>
                            <li className="sidebar__item sidebar__item--active"><img src={projectIcon} alt="" className="sidebar__icon" />projects</li>
                        </ul>
                    </div>
                    <div className="project__detail">
                        {folderStructure ? (
                            <>
                                {!projectOpen ? (
                                    <ul className="project__list">
                                        <li className="project__item" onClick={e => {
                                            e.preventDefault();
                                            setProjectOpen(true);
                                        }}>
                                            <img src={folderIcon} alt="" className="project__icon" />
                                            <p className="project__name">TaskEase</p>
                                        </li>
                                        <li className="project__item" onClick={e => {
                                            e.preventDefault();
                                            setProjectOpen(true);
                                        }}>
                                            <img src={folderIcon} alt="" className="project__icon" />
                                            <p className="project__name">PatDoc</p>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="project__list">
                                        <li className="project__item" onClick={handleDescriptionOpen}>
                                            <img src={textIcon} alt="" className="project__icon" />
                                            <p className="project__name">Description.txt</p>
                                        </li>
                                        <li className="project__item" onClick={handleDescriptionOpen}>
                                            <img src={videoIcon} alt="" className="project__icon" />
                                            <p className="project__name">Demo.video</p>
                                        </li>
                                    </ul>
                                )}</>) : (
                            <>
                                {textOpen ? (
                                    <div className="description">
                                        <div className="description__toolbar-container">
                                            <h3 className="description__project-name">TaskEase</h3>
                                            <img onClick={handleClose} src={closeIcon} alt="" className="description__icon" />
                                        </div>
                                        <div className="description__detail-container">
                                            <img src={taskEaseLogo} alt="" className="description__logo" />
                                            <h2 className="description__name">TaskeEase</h2>
                                            <h3 className="description__title">Introduction</h3>
                                            <p className="description__detail">
                                                TaskEase was born out of a desire to solve the problem of finding quick help for short-term tasks. Whether it's moving, cleaning, or any odd job, TaskEase streamlines the process. Users can post task details, location, and compensation, and task helpers can offer their assistance based on their availability and skills. Task posters can review task helper profiles and choose the most suitable candidate for their task.
                                            </p>
                                            <h3 className="description__title">Features</h3>
                                            <ul className="description__list">
                                                <li className="description__item"><h4 className="description__sub-title">1. Effortless Task Posting and Browsing</h4></li>
                                                <li className="description__item"><h4 className="description__sub-title">2. Task Details and Communication</h4></li>
                                                <li className="description__item"><h4 className="description__sub-title">3. Task Matching and Acceptance</h4></li>
                                                <li className="description__item"><h4 className="description__sub-title">4. User Ratings and Reviews</h4></li>
                                            </ul>
                                            <h3 className="description__title">Technologies Used</h3>
                                            <ul className="description__list">
                                                <li className="description__item">
                                                    <h4 className="description__sub-title">Front-End Development: </h4>
                                                    <p className="description__detail"> HTML, CSS (SASS), JavaScript (React)</p>
                                                </li>
                                                <li className="description__item">
                                                    <h4 className="description__sub-title">Back-End Development:</h4>
                                                    <p className="description__detail"> Node.js, Express.js, MySQL</p>
                                                </li>
                                                <li className="description__item">
                                                    <h4 className="description__sub-title">Authentication and Security:</h4>
                                                    <p className="description__detail">JSON Web Tokens (JWT), Passport.js</p>
                                                </li>
                                                <li className="description__item">
                                                    <h4 className="description__sub-title">Libraries:</h4>
                                                    <p className="description__detail">Axios, React Router, UUID, Knex, Dotenv, Cors</p>
                                                </li>
                                                <li className="description__item">
                                                    <h4 className="description__sub-title">APIs:</h4>
                                                    <p className="description__detail">Google Maps API or Leafletjs, Geolocation API</p>
                                                </li>
                                            </ul>
                                            <h3 className="description__title">Repositories</h3>
                                            <ul className="description__list">
                                                <li className="description__item">
                                                    <h4 className="description__sub-title">Front-end Repo:</h4>
                                                    <Link className="description__link">https://github.com/Unknown-0perator/TaskEase</Link>
                                                </li>
                                                <li className="description__item">
                                                    <h4 className="description__sub-title">Back-end Repo:</h4>
                                                    <Link className="description__link">https://github.com/Unknown-0perator/TaskEase-API</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (<></>)}</>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;