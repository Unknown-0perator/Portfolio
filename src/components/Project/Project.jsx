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
import data from '../../assests/data/data.json';

const convertObjToArray = (obj) => {
    return Object.entries(obj).map(([key, value]) => ({
        key: key,
        value: value
    }))
}


const Project = () => {


    const [folderStructure, setFolderStructure] = useState(true);
    const [projectOpen, setProjectOpen] = useState(false)
    const [textOpen, setTextOpen] = useState(false)
    const [currentProject, setCurrentProject] = useState("")


    const handleDescriptionOpen = () => {
        setFolderStructure(false);
        setTextOpen(true)
    }

    const handleClose = () => {
        setFolderStructure(true);
        setTextOpen(false)
    }

    const projectDetails = data.project_details[currentProject];

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
                                        {data.projects.map(project => {
                                            return (
                                                <li key={project} className="project__item" onClick={e => {
                                                    e.preventDefault();
                                                    setProjectOpen(true);
                                                    setCurrentProject(project)
                                                }}>
                                                    <img src={folderIcon} alt="" className="project__icon" />
                                                    <p className="project__name">{project}</p>
                                                </li>
                                            )
                                        })}
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
                                            <h3 className="description__project-name">{projectDetails.name}</h3>
                                            <img onClick={handleClose} src={closeIcon} alt="" className="description__icon" />
                                        </div>
                                        <div className="description__detail-container">
                                            <img src={taskEaseLogo} alt="" className="description__logo" />
                                            <h2 className="description__name">{projectDetails.name}</h2>
                                            <h3 className="description__title">Introduction</h3>
                                            <p className="description__detail">
                                                {projectDetails.introduction}
                                            </p>
                                            <h3 className="description__title">Features</h3>
                                            <ul className="description__list">
                                                {projectDetails.features.map((feature, index) => {
                                                    return (
                                                        <li className="description__item"><h4 className="description__sub-title">{index + 1}. {feature}</h4></li>
                                                    )
                                                })}
                                            </ul>
                                            <h3 className="description__title">Technologies Used</h3>
                                            <ul className="description__list">
                                                {
                                                    convertObjToArray(projectDetails.technologies).map(tech => {
                                                        return (
                                                            <li className="description__item">
                                                                <h4 className="description__sub-title">{tech.key}: </h4>
                                                                <p className="description__detail">{tech.value}</p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <h3 className="description__title">Repositories</h3>
                                            <ul className="description__list">
                                                {convertObjToArray(projectDetails.repo).map(repo => {
                                                    return (
                                                        <li className="description__item">
                                                            <h4 className="description__sub-title">{repo.key}:</h4>
                                                            <Link className="description__link">{repo.value}</Link>
                                                        </li>
                                                    )
                                                })}
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