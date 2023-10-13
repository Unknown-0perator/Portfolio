import './Project.scss';
import backIcon from '../../assests/icons/backward.svg';
import frontIcon from '../../assests/icons/forward.svg';
import recentIcon from '../../assests/icons/recent.svg';
import projectIcon from '../../assests/icons/project.svg';
import folderIcon from '../../assests/icons/folder.svg';
import textIcon from '../../assests/icons/text.svg';
import videoIcon from '../../assests/icons/video.svg';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../../assests/data/data.json';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import VideoPlayer from '../VideoPlayer/VideoPlayer';




const Project = ({ projectSection }) => {


    const [folderStructure, setFolderStructure] = useState(true);
    const [projectOpen, setProjectOpen] = useState(false)
    const [textOpen, setTextOpen] = useState(false)
    const [currentProject, setCurrentProject] = useState("")
    const [videoOpen, setVideoOpen] = useState(false)


    const handleDescriptionOpen = () => {
        setFolderStructure(false);
        setVideoOpen(false);
        setTextOpen(true)
    }

    const handVideoOpen = () => {
        setFolderStructure(false);
        setTextOpen(false);
        setVideoOpen(true);
    }

    const handleClose = () => {
        setFolderStructure(true);
        setTextOpen(false)
    }

    const projectDetails = data.project_details[currentProject];

    return (
        <section className="project-section" ref={projectSection}>
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
                        <img onClick={e => {
                            e.preventDefault();
                            setProjectOpen(true)
                        }} src={frontIcon} alt="" className="project__toolbar-icon" />
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
                                            <p className="project__name">Desc.txt</p>
                                        </li>
                                        <li className="project__item" onClick={handVideoOpen}>
                                            <img src={videoIcon} alt="" className="project__icon" />
                                            <p className="project__name">Demo.video</p>
                                        </li>
                                    </ul>
                                )}</>) : (
                            <>
                                {textOpen ? (
                                    <ProjectDetail projectDetails={projectDetails} handleClose={handleClose} />
                                ) : (<>
                                    {videoOpen ? (
                                        <VideoPlayer projectDetails={projectDetails} handleClose={handleClose} />
                                    ) : (<></>)}
                                </>)}</>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;